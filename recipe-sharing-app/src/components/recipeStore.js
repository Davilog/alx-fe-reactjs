import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (title, ingredients) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { id: Date.now(), title, ingredients },
      ],
    })),
}));

export default useRecipeStore;