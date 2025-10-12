import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        <nav style={{ 
          padding: '10px 20px', 
          backgroundColor: '#333', 
          marginBottom: '0'
        }}>
          <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
          <Link to="/blog" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Blog</Link>
          <Link to="/profile" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Profile</Link>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
