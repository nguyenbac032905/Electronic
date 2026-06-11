import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,{params}:SingleProductPageProps){
    const {productSlug} = await params;
    const product = await prisma.product.findUnique({
        where: {slug: productSlug}
    });
    if(!product){
        return NextResponse.json({error: "404 Not Found"},{status: 404});
    }
    return NextResponse.json(product);
}