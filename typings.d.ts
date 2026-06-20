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
interface User {
    id: string;
    email:string;
    password: string | null;
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
interface AdminMainContentProps{
    children: React.ReactNode;
    isFooter: boolean
}