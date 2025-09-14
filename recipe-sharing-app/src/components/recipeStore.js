import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  addRecipe: (title, ingredients, instructions) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { id: Date.now(), title, ingredients, instructions },
      ],
      filteredRecipes: [
        ...state.recipes,
        { id: Date.now(), title, ingredients, instructions },
      ],
    })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      );
      return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
    }),
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
    }),

  // 🔍 Search & filter actions
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
}));

export default useRecipeStore;
