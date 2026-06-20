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
interface Order {
    id: string;
    name: string;
    lastname: string;
    phone: string;
    email: string;
    company: string;
    address: string;
    apartment: string;
    city: string;
    country: string;
    postalCode: number;
    cardName: string;
    cardNumber: string;
    expirationDate: string;
    cvc: string;
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