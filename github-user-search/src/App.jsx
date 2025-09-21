import { useState } from "react";
import Search from "./components/Search";
import Results from "./src/Results";
import { searchUsers } from "./services/githubService";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (filters) => {
    setLoading(true);
    setError("");
    try {
      const data = await searchUsers(filters);
      setUsers(data.items || []);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        GitHub User Search
      </h1>
      <Search onSearch={handleSearch} />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}
      {!loading && !error && <Results users={users} />}
    </div>
  );
}
