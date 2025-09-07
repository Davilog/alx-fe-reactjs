// Services.jsx
function Services() {
  return (
    <div
      style={{
        padding: '50px',
        textAlign: 'center',
        backgroundColor: '#fef9e7',
        minHeight: '80vh',
      }}
    >
      <h1 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '20px' }}>
        Our Services
      </h1>
      <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.2rem', color: '#555' }}>
        <li style={{ margin: '10px 0' }}>Technology Consulting</li>
        <li style={{ margin: '10px 0' }}>Market Analysis</li>
        <li style={{ margin: '10px 0' }}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
