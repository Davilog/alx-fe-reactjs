// About.jsx
function About() {
  return (
    <div
      style={{
        padding: '50px',
        textAlign: 'center',
        backgroundColor: '#e8f0fe',
        minHeight: '80vh',
      }}
    >
      <h1 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '20px' }}>
        About Us
      </h1>
      <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
        Our company has been providing top-notch services since 1990. We
        specialize in various fields including technology, marketing, and
        consultancy.
      </p>
    </div>
  );
}

export default About;

