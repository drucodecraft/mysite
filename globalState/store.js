import { create } from "zustand";
const useStore = create((set) => ({
  toggle: false,
  toggleNav: (toggleState) => set({ toggle: toggleState }),
}));

export default useStore;
