import { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const validate = () => {
    const newErrors = {};
    
    if (!username) {
      newErrors.username = 'Username is required';
    }
    
    if (!email) {
      newErrors.email = 'Email is required';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', { username, email, password });
      alert('Registration successful!');
      // Reset form
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>User Registration (Controlled Components)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              border: errors.username ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.username && <span style={{ color: 'red', fontSize: '14px' }}>{errors.username}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              border: errors.email ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '14px' }}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              border: errors.password ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.password && <span style={{ color: 'red', fontSize: '14px' }}>{errors.password}</span>}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;