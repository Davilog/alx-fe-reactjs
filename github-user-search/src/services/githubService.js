const BASE_URL = "https://api.github.com/search/users";

export async function searchUsers({ username, location, minRepos }) {
  let query = username ? `${username} in:login` : "";

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await fetch(
    `${BASE_URL}?q=${encodeURIComponent(query)}&per_page=20`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

