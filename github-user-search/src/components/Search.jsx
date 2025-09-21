// src/components/Search.jsx
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(null);
    setError(null);

    const username = query.trim();
    if (!username) return;

    setLoading(true);
    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      // exact error message requested by the task:
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 760, margin: '40px auto', padding: '0 16px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>GitHub User Search</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter GitHub username (e.g. octocat)"
          style={{
            flex: 1,
            padding: '10px 12px',
            borderRadius: 6,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 14px',
            borderRadius: 6,
            border: 'none',
            backgroundColor: '#0366d6',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Search
        </button>
      </form>

      <div style={{ marginTop: 20 }}>
        {loading && <p>Loading...</p>}

        {error && (
          <div style={{ color: '#b00020', fontWeight: '600' }}>
            {error}
          </div>
        )}

        {user && (
          <div
            style={{
              display: 'flex',
              gap: 16,
              alignItems: 'center',
              marginTop: 12,
              padding: 16,
              border: '1px solid #e6e6e6',
              borderRadius: 8,
              backgroundColor: '#fff',
            }}
          >
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <h2 style={{ margin: 0 }}>{user.name || user.login}</h2>
              <p style={{ margin: '6px 0', color: '#555' }}>{user.bio}</p>
              <p style={{ margin: '6px 0' }}>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View GitHub Profile
                </a>
              </p>
              <p style={{ margin: '6px 0', color: '#444', fontSize: 14 }}>
                Repos: {user.public_repos} • Followers: {user.followers} • Following: {user.following}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
