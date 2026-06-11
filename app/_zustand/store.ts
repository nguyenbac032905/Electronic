import {create} from "zustand";

export type ProductInCart = {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
};

export type State = {
    products: ProductInCart[]
};

export type Actions = {
    addToCart: (newProduct: ProductInCart) => void,
    updateCartAmount: (id: number, quantity:number) => void,
    removeFromCart: (id: number) => void
};

export const useProductStore = create<State & Actions>((set) => ({
    products:[],
    addToCart: (newProduct) => {
        set(state => {
            const existItem = state.products.find(item => item.id === newProduct.id);
            if(!existItem){
                return {products: [...state.products,newProduct]}
            }
            return {
                products: state.products.map(product =>{
                    if(product.id === existItem.id){
                        return {...product,amount: product.amount+newProduct.amount}
                    }else{
                        return product;
                    }
                })
            }
        })
    },
    updateCartAmount: (id, amount) => {
        set((state) => {
            console.log(state.products);
            return {
                products: state.products.map(product =>
                    product.id === id
                        ? { ...product, amount }
                        : product
                )
            }
        });
    },
    removeFromCart: (id) => {
        set((state) => ({
            products: state.products.filter(product => product.id !==id)
        }))
    }
}));
