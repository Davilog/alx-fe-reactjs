import useRecipeStore from "./components/recipeStore";
import { Link } from "react-router-dom";

function FavoritesList() {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <ul>
          {favorites.map(
            (recipe) =>
              recipe && (
                <li key={recipe.id}>
                  <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}

export default FavoritesList;
