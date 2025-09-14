import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  addRecipe: (title, ingredients) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { id: Date.now(), title, ingredients },
      ],
    })),
}));

export default useRecipeStore;