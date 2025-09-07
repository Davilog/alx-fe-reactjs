// Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        padding: '15px 30px',
        backgroundColor: '#1a1a1a',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <Link
        to="/"
        style={{ color: '#f0f0f0', textDecoration: 'none', fontWeight: 'bold' }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ color: '#f0f0f0', textDecoration: 'none', fontWeight: 'bold' }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{ color: '#f0f0f0', textDecoration: 'none', fontWeight: 'bold' }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{ color: '#f0f0f0', textDecoration: 'none', fontWeight: 'bold' }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
