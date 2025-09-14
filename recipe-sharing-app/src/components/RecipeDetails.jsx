import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./components/recipeStore";
import DeleteRecipeButton from "./components/DeleteRecipeButton";

function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.ingredients}</p>
      <p>{recipe.instructions}</p>

      <button
        onClick={() =>
          isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
        }
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>

      <div style={{ marginTop: "1rem" }}>
        <Link to={`/edit/${recipe.id}`}>Edit</Link>
        <DeleteRecipeButton id={recipe.id} />
      </div>
    </div>
  );
}

export default RecipeDetails;
