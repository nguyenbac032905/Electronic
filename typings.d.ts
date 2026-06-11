interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
    description: string;
    mainImage: string;
    slug: string;
}
interface SingleProductPageProps {
    params: {
        productSlug: string
    }
}