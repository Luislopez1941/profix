
import { create } from 'zustand';

interface StoreState {

    formStatus: boolean;
    setFormStatus: (x: any) => void;
}

export const storeLogin = create<StoreState>((set) => ({

    formStatus: false,
    setFormStatus: (x) => set({formStatus: x}),

}));

