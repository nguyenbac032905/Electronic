import { create } from "zustand";

export type State = {
    page: number;
};

export type Actions = {
    incrementPage: () => void;
    decrementPage: () => void;
    setPage: (page: number) => void;
};

export const usePaginationStore = create<State & Actions>((set) => ({
    page: 1,
    incrementPage: () => {
        set((state) => ({
            page: state.page + 1,
        }));
    },
    decrementPage: () => {
        set((state) => ({
            page: Math.max(1, state.page - 1),
        }));
    },
    setPage: (page: number) => {
        set({
            page,
        });
    },
}));