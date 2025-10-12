const ProfileSettings = () => {
  return (
    <div>
      <h2>Profile Settings</h2>
      <div style={{ marginTop: '15px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email Notifications:</label>
          <input type="checkbox" defaultChecked /> Enable email notifications
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Privacy:</label>
          <select style={{ padding: '5px' }}>
            <option>Public</option>
            <option>Friends Only</option>
            <option>Private</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Theme:</label>
          <select style={{ padding: '5px' }}>
            <option>Light</option>
            <option>Dark</option>
            <option>Auto</option>
          </select>
        </div>
        <button style={{ 
          padding: '8px 16px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px' 
        }}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;