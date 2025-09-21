import { useState } from "react";

export default function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 items-center bg-white shadow-md p-4 rounded-2xl"
    >
      <input
        type="text"
        placeholder="Search by username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/3"
      />

      <input
        type="text"
        placeholder="Filter by location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/3"
      />

      <input
        type="number"
        placeholder="Min repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/3"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </form>
  );
}
