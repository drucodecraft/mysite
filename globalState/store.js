import { create } from "zustand";
const useStore = create((set) => ({
  toggle: false,
  selected: 0,
  toggleNav: (toggleState) => set({ toggle: toggleState }),
  select: (selectedValue) => set({ selected: selectedValue }),
}));

export default useStore;
