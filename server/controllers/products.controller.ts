import { Request, Response } from "express";
import prisma from "../utils/db";
import { Prisma } from "../prisma/generated/client";

// ANTI TYPE CONFUSION (là người dùng cố tình gửi sai kiểu dữ liệu làm lỗi server)
const safeNumber = (value: any): number | null => {
  if (typeof value !== "string" && typeof value !== "number") return null;

  const num = Number(value);
  if (!Number.isFinite(num)) return null;

  return num;
};
const safeBoolean = (value: any): boolean | null => {
  if (value === true || value === false) return value;

  if (value === "true") return true;
  if (value === "false") return false;

  return null;
};
const safeString = (value: any): string | null => {
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};
const isPlainObject = (obj: any): boolean => {
  return obj && typeof obj === "object" && obj.constructor === Object;
};
const safePage = (value: any): number => {
  const num = Number(value);
  if (!Number.isFinite(num) || num < 1) return 1;
  return Math.floor(num);
};


// ANTI NOSQL INJECTION (là người dùng gửi các object kèm toán tử lên để lấy ra thông tin không cho phép)
//white list
const ALLOWED_FIELDS = ["price", "inStock", "category", "manufacturer"];
const ALLOWED_OPERATORS = ["$lte","$gte","$lt","$gt","$equals","$contains"];
const ALLOWED_SORT = ["titleAsc", "titleDesc", "lowPrice", "highPrice"];

const isValidField = (field: string) => ALLOWED_FIELDS.includes(field);
const isValidOperator = (op: string) => ALLOWED_OPERATORS.includes(op);
const isValidSort = (sort: string) => ALLOWED_SORT.includes(sort);

//sort an toàn
const buildSafeSort = (sort?: string): Prisma.ProductOrderByWithRelationInput => {
  if (!sort || !isValidSort(sort)) return {};

  switch (sort) {
    case "titleAsc":
      return { title: "asc" };

    case "titleDesc":
      return { title: "desc" };

    case "lowPrice":
      return { price: "asc" };

    case "highPrice":
      return { price: "desc" };

    default:
      return {};
  }
};

// MAIN SECURITY LOGIC (WHERE BUILDER)
const buildSafeWhere = (filters: any, search?: string) => {
  const where: any = {};

  // SEARCH SAFE (ANTI INJECTION)

  const cleanSearch = safeString(search);

  if (cleanSearch) {
    where.OR = [
      { title: { contains: cleanSearch } },
      { description: { contains: cleanSearch } },
      { manufacturer: { contains: cleanSearch } },
      { category: { contains: cleanSearch } },
    ];
  }

  // FILTER SAFE (WHITELIST + TYPE SAFE)

  if (filters && isPlainObject(filters)) {
    for (const field in filters) {
      if (!isValidField(field)) continue;

      const ops = filters[field];
      if (!isPlainObject(ops)) continue;

      where[field] = {};

      for (const op in ops) {
        if (!isValidOperator(op)) continue;

        let value = ops[op];

        // TYPE SAFE CAST
        if (field === "price" || field === "inStock") {
          value = safeNumber(value);
        } else {
          value = safeString(value);
        }

        if (value === null) continue;

        switch (op) {
          case "$lte":
            where[field].lte = value;
            break;

          case "$gte":
            where[field].gte = value;
            break;

          case "$lt":
            where[field].lt = value;
            break;

          case "$gt":
            where[field].gt = value;
            break;

          case "$equals":
            where[field].equals = value;
            break;

          case "$contains":
            where[field].contains = value;
            break;
        }
      }
    }
  }

  return where;
};

export const index = async (request: Request, response: Response) => {
  const filters = request.query.filters;
  const sort = request.query.sort as string;
  const search = request.query.search as string;
  const page = safePage(request.query.page);

  const where = buildSafeWhere(filters, search);
  const orderBy = buildSafeSort(sort);

  const products = await prisma.product.findMany({
    where,
    orderBy,
    skip: (page - 1) * 10,
    take: 10,
  });

  return response.status(200).json(products);
};
export const getProductDetail = async (request: Request, response: Response) => {
    if (typeof request.params.productSlug !== "string") {
        return response.status(400).json({
            error: "Product slug must be string",
        });
    }
    const productSlug = request.params.productSlug;

    const product = await prisma.product.findUnique({
        where: { slug: productSlug }
    });
    if (!product) {
        return response.status(404).json({ error: "404 Not Found" });
    }
    return response.status(200).json(product);
}
export const createProduct = async (request: Request, response: Response) => {
    try {
        const { slug, title, mainImage, price, description, manufacturer, category, inStock } = request.body;
        const product = await prisma.product.create({
            data: {
                slug,
                title,
                mainImage,
                price,
                description,
                manufacturer,
                category,
                inStock
            }
        });
        return response.status(201).json(product);
    } catch (error) {
        return response.status(500).json({ error: "Server error" });
    }
}
export const updateProduct = async (request: Request, response: Response) => {
    try {
        const productSlug = request.params.productSlug;
        if (typeof productSlug !== "string") {
            return response.status(400).json({
                error: "Product slug must be string",
            });
        }

        const acceptUpdate = [
            "slug",
            "title",
            "mainImage",
            "price",
            "description",
            "manufacturer",
            "category",
            "inStock",
        ];

        const objectUpdate: any = {};

        acceptUpdate.forEach((item) => {
            if (request.body[item] !== undefined) {
                objectUpdate[item] = request.body[item];
            }
        });

        const product = await prisma.product.update({
            where: { slug: productSlug },
            data: objectUpdate,
        });

        return response.status(200).json(product);
    } catch (error: any) {
        if (error.code === "P2025") {
            return response.status(404).json({ error: "Not found" });
        }
        return response.status(500).json({ error: "Server error" });
    }
};
export const deleteProduct = async (request: Request, response: Response) => {
    try {
        const productSlug = request.params.productSlug
        if (typeof productSlug !== "string") {
            return response.status(400).json({ error: "Product slug must be string" });
        }
        await prisma.product.delete({
            where: {
                slug: productSlug
            }
        })
        return response.status(200).json({ message: "Delete success" });
    } catch (error: any) {
        if (error.code === "P2025") {
            return response.status(404).json({ error: "Not found" });
        }
        return response.status(500).json({ error: "Server error" });
    }
}