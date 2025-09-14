import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./components/recipeStore";
import DeleteRecipeButton from "./components/DeleteRecipeButton";

function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{recipe.title}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <Link to={`/edit/${recipe.id}`}>Edit</Link>
      {" | "}
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
}

export default RecipeDetails;
