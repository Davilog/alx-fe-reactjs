// filename: src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: 'center',
        margin: '20px',
        padding: '15px',
        border: '2px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#fefefe',
      }}
    >
      <h2 style={{ color: 'darkblue' }}>Simple Counter App</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>

      <div style={{ marginTop: '10px' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            margin: '5px',
            padding: '10px 15px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{
            margin: '5px',
            padding: '10px 15px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            margin: '5px',
            padding: '10px 15px',
            backgroundColor: 'gray',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
