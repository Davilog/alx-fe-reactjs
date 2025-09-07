// src/components/UserProfile.jsx
import { useContext } from 'react';
import UserContext from '../UserContext';

const UserProfile = (props) => {
  const context = useContext(UserContext);

  // fallback to props if context not provided (keeps backwards compatibility)
  const name = (context && context.name) ?? props.name;
  const age = (context && context.age) ?? props.age;
  const bio = (context && context.bio) ?? props.bio;

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ color: 'blue', fontSize: '20px', marginBottom: '8px' }}>
        {name}
      </h2>
      <p>
        Age:{' '}
        <span style={{ fontWeight: 'bold', color: 'darkred' }}>
          {age}
        </span>
      </p>
      <p style={{ fontStyle: 'italic', color: '#333' }}>{bio}</p>
    </div>
  );
};

export default UserProfile;
