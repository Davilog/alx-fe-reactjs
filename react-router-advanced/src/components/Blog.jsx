import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    { id: 1, title: "Getting Started with React Router", excerpt: "Learn the basics of React Router..." },
    { id: 2, title: "Advanced React Patterns", excerpt: "Explore advanced patterns in React..." },
    { id: 3, title: "State Management in React", excerpt: "Different approaches to state management..." }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog</h1>
      <p>Click on any blog post to see dynamic routing in action:</p>
      
      <div style={{ marginTop: '20px' }}>
        {blogPosts.map(post => (
          <div 
            key={post.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              marginBottom: '15px', 
              borderRadius: '8px' 
            }}
          >
            <h3 style={{ margin: '0 0 10px 0' }}>
              <Link 
                to={`/blog/${post.id}`}
                style={{ color: '#007bff', textDecoration: 'none' }}
              >
                {post.title}
              </Link>
            </h3>
            <p style={{ margin: '0', color: '#666' }}>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;