import { create } from "zustand";

export const usePhotoStore = create((set) => ({
  image: null,
  zoom: 1,
  brightness: 100,
  contrast: 100,
  saturation: 100,
  filter: "none",
  crop: "1/1",
  stickers: [],
  lightFlare: null,
  shadow: null,
  overlay: null,
  setImage: (image) => set({ image }),
  setZoom: (zoom) => set({ zoom }),
  setBrightness: (brightness) => set({ brightness }),
  setContrast: (contrast) => set({ contrast }),
  setSaturation: (saturation) => set({ saturation }),
  setFilter: (filter) => set({ filter }),
  setCrop: (crop) => set({ crop }),
  addSticker: (sticker) =>
    set((state) => ({ stickers: [...state.stickers, sticker] })),
  updateStickerPosition: (index, position) =>
    set((state) => {
      const stickers = [...state.stickers];
      stickers[index] = { ...stickers[index], position };
      return { stickers };
    }),
  updateStickerSize: (index, size) =>
    set((state) => {
      const stickers = [...state.stickers];
      stickers[index] = { ...stickers[index], size };
      return { stickers };
    }),
  setLightFlare: (lightFlare) => set({ lightFlare }),
  setShadow: (shadow) => set({ shadow }),
  setOverlay: (overlay) => set({ overlay }),
  resetCanvas: () =>
    set({
      image: null,
      zoom: 1,
      brightness: 100,
      contrast: 100,
      saturation: 100,
      filter: "none",
      crop: "1/1",
      stickers: [],
      lightFlare: null,
      shadow: null,
      overlay: null,
    }),
}));
