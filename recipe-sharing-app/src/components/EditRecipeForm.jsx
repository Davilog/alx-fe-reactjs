import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./components/recipeStore";

function EditRecipeForm() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState(recipe?.title || "");
  const [ingredients, setIngredients] = useState(recipe?.ingredients || "");
  const [instructions, setInstructions] = useState(recipe?.instructions || "");

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, { title, ingredients, instructions });
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Ingredients: </label>
          <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        </div>
        <div>
          <label>Instructions: </label>
          <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditRecipeForm;
