import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Loading posts...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        <h2>Error: {error.message}</h2>
        <button 
          onClick={() => refetch()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Posts from JSONPlaceholder API</h1>
        <button 
          onClick={() => refetch()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Refetch Data
        </button>
      </div>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {data?.slice(0, 10).map((post) => (
          <div 
            key={post.id} 
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
              {post.id}. {post.title}
            </h3>
            <p style={{ margin: '0', color: '#666', lineHeight: '1.5' }}>
              {post.body}
            </p>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '20px', textAlign: 'center', color: '#666' }}>
        <p>Showing first 10 posts out of {data?.length} total posts</p>
        <p>Data is cached for 10 minutes. Navigate away and come back to see caching in action!</p>
      </div>
    </div>
  );
};

export default PostsComponent;