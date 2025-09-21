import { useEffect, useState } from "react";

export default function Results({ users }) {
  const [detailedUsers, setDetailedUsers] = useState([]);

  useEffect(() => {
    async function fetchDetails() {
      const details = await Promise.all(
        users.map(async (user) => {
          const res = await fetch(user.url);
          return res.json();
        })
      );
      setDetailedUsers(details);
    }

    if (users.length > 0) {
      fetchDetails();
    } else {
      setDetailedUsers([]);
    }
  }, [users]);

  if (users.length === 0) {
    return <p className="text-center mt-6">No results found</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {detailedUsers.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center"
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full mb-3"
          />
          <h2 className="text-lg font-semibold">{user.login}</h2>
          <p className="text-gray-600">{user.location || "No location"}</p>
          <p className="text-gray-600">Repos: {user.public_repos}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 mt-2 hover:underline"
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
}
