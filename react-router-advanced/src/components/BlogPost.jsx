import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog posts data
  const blogPosts = {
    1: {
      title: "Getting Started with React Router",
      content: "React Router is a powerful library for handling routing in React applications. It allows you to create single-page applications with navigation without the page refreshing.",
      author: "Jane Smith",
      date: "2024-01-15"
    },
    2: {
      title: "Advanced React Patterns",
      content: "Learn about advanced React patterns including render props, higher-order components, and custom hooks to build more maintainable applications.",
      author: "Mike Johnson",
      date: "2024-01-20"
    },
    3: {
      title: "State Management in React",
      content: "Explore different state management solutions in React, from useState and useContext to external libraries like Redux and Zustand.",
      author: "Sarah Wilson",
      date: "2024-01-25"
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Blog Post Not Found</h1>
        <p>The blog post with ID {id} does not exist.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <article>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>{post.title}</h1>
        <div style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
          By {post.author} | {post.date}
        </div>
        <div style={{ lineHeight: '1.6', fontSize: '16px' }}>
          {post.content}
        </div>
      </article>
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <p><strong>Dynamic Route Demo:</strong> This page uses dynamic routing with URL parameter: <code>/blog/{id}</code></p>
      </div>
    </div>
  );
};

export default BlogPost;