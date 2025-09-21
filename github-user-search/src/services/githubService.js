// src/services/githubService.js
import axios from 'axios';

const API_BASE = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional

export async function fetchUserData(username) {
  if (!username) throw new Error('No username provided');

  const url = `${API_BASE}/users/${encodeURIComponent(username)}`;
  const headers = {};

  // If you provided a token in .env (VITE_APP_GITHUB_API_KEY), include it
  if (API_KEY) {
    // GitHub accepts either 'token <token>' or 'Bearer <token>'; 'token' is fine here.
    headers.Authorization = `token ${API_KEY}`;
  }

  const response = await axios.get(url, { headers });
  return response.data;
}
