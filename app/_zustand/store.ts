
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type ProductInCart = {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
};

export type State = {
    products: ProductInCart[];
    allQuantity: number;
    total: number;
};

export type Actions = {
    addToCart: (newProduct: ProductInCart) => void;
    updateCartAmount: (id: number, quantity: number) => void;
    removeFromCart: (id: number) => void;
    calculateTotals: () => void;
};

export const useProductStore = create<State & Actions>()(
    persist(
        (set) => ({
            products: [],
            allQuantity: 0,
            total: 0,
            addToCart: (newProduct) => {
                set(state => {
                    const existItem = state.products.find(item => item.id === newProduct.id);
                    if (!existItem) {
                        return { products: [...state.products, newProduct] }
                    }
                    return {
                        products: state.products.map(product => {
                            if (product.id === existItem.id) {
                                return { ...product, amount: product.amount + newProduct.amount }
                            } else {
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
                    products: state.products.filter(product => product.id !== id)
                }))
            },
            calculateTotals: () => {
                set((state) => {
                    let amount = 0;
                    let total = 0;
                    state.products.forEach(product => {
                        amount += product.amount;
                        total += product.amount * product.price;
                    })
                    return { products: state.products, allQuantity: amount, total: total };
                })
            }
        }),
        {
            name: "products-storage",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);
