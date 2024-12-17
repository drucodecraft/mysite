import { create } from "zustand";
let useStore = create((set) => ({
  toggle: false,
  setToggle: (value) => set({ toggle: value }),
  selected: 0,
  setSelected: (value) => set({ selected: value }),
}));

export default useStore;
