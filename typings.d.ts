interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
    description: string;
    mainImage: string;
    slug: string;
    manufacturer: string;
    category: string;
    inStock: number
}
interface SingleProductPageProps {
    params: {
        productSlug: string
    }
}
interface ProductInWishlist {
    id: number;
    title: string;
    price: number;
    image: string;
    slug: string;
  };