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
    addToCart: (newProduct: ProductInCart) => void
};

export const useProductStore = create<State & Actions>((set) => ({
    products:[],
    addToCart: (newProduct) => {
        set(state => {
            console.log(state.products);
            const existItem = state.products.find(item => item.id === newProduct.id);
            if(!existItem){
                return {products: [...state.products,newProduct]}
            }
            return {
                products: state.products.map(product =>{
                    if(product.id === existItem.id){
                        return {...product,amount: product.amount+newProduct.amount}
                    }else{
                        return product
                    }
                })
            }
        })
    }
}));
