import { useState } from 'react';
import PostsComponent from './PostsComponent';

const Navigation = () => {
  const [currentView, setCurrentView] = useState('posts');

  const DummyComponent = () => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Dummy Page</h2>
      <p>This is a dummy page to demonstrate React Query caching.</p>
      <p>Navigate back to Posts to see how data loads from cache!</p>
    </div>
  );

  return (
    <div>
      <nav style={{ 
        padding: '10px 20px', 
        backgroundColor: '#333', 
        marginBottom: '0'
      }}>
        <button
          onClick={() => setCurrentView('posts')}
          style={{
            padding: '8px 16px',
            marginRight: '10px',
            backgroundColor: currentView === 'posts' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Posts
        </button>
        <button
          onClick={() => setCurrentView('dummy')}
          style={{
            padding: '8px 16px',
            backgroundColor: currentView === 'dummy' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Dummy Page
        </button>
      </nav>
      
      {currentView === 'posts' ? <PostsComponent /> : <DummyComponent />}
    </div>
  );
};

export default Navigation;