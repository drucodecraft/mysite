import { create } from "zustand";
let useStore = create((set) => ({
  toggle: false,
  toggleActive: (value) => set({ toggle: value }),
  selected: 0,
  select: (value) => set({ selected: value }),
  top: false,
  setTop: (value) => set({ top: value }),
  linkClicked: false,
  setClicked: (value) => set({ linkClicked: value }),
  moveToval: 0,
  setMoveTo: (value) => set({ moveToval: value }),
}));

export default useStore;
