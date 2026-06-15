import { create } from "zustand";

export type State = {
    wishlist: ProductInWishlist[]
}

export type Actions = {
    addToWishlist: (product: ProductInWishlist) => void;
    removeFromWishlist: (id: number) => void
}

export const useWishlistStore = create<State & Actions>((set) => ({
    wishlist: [],
    addToWishlist: (product) => {
        set((state) => {
            const existItem = state.wishlist.some((item) => product.id === item.id);

            if(existItem){
                return state;
            }else{
                return {wishlist: [...state.wishlist,product]};
            }
        })
    },
    removeFromWishlist: (id) => {
        set((state) => {
            const newWishList = state.wishlist.filter((item) => item.id !== id);
            return {wishlist: newWishList};
        })
    }
}))