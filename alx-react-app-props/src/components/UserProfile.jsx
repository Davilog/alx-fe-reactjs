// src/components/UserProfile.jsx
import { useContext } from 'react';
import UserContext from '../UserContext';

const UserProfile = (props) => {
  // Try to read from context first; fallback to props for backward compatibility
  const context = useContext(UserContext);
  const name = context?.name ?? props.name;
  const age = context?.age ?? props.age;
  const bio = context?.bio ?? props.bio;

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
