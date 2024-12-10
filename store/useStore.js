import { create } from "zustand";
let useStore = create((set) => ({
  toggle: false,
  toggleActive: (value) => set({ toggle: value }),
  selected: 0,
  select: (value) => set({ selected: value }),
  displayScrollTop: false,
  setDisplayTop: (value) => set({ displayScrollTop: value }),
}));

export default useStore;
