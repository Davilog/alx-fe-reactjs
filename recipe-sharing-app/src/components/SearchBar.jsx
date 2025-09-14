import useRecipeStore from "./components/recipeStore";

function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
    />
  );
}

export default SearchBar;
