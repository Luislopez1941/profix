
import { create } from 'zustand';

interface StoreState {

    user: boolean;
    setUser: (x: any) => void;
}

export const storeLogin = create<StoreState>((set) => ({

    user: false,
    setUser: (x) => set({user: x}),

}));

