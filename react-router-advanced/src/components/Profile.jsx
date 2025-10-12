import { Outlet, Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Profile Page</h1>
      <p>This is a protected route that requires authentication.</p>
      
      <nav style={{ margin: '20px 0' }}>
        <Link 
          to="details" 
          style={{ 
            marginRight: '15px', 
            padding: '8px 16px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '4px' 
          }}
        >
          Profile Details
        </Link>
        <Link 
          to="settings" 
          style={{ 
            padding: '8px 16px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '4px' 
          }}
        >
          Profile Settings
        </Link>
      </nav>
      
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;