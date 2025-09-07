// src/App.jsx
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from './components/MainContent';
import UserContext from './UserContext'; // <-- new import

function App() {
  const [count, setCount] = useState(0)

  // Provide a userData object to the Context provider.
  // I included age/bio so this works with your current UserProfile props too.
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: "25",
    bio: "Loves hiking and photography"
  };

  return (
    <>
      {/* Wrap the section that contains UserProfile with the Provider */}
      <UserContext.Provider value={userData}>
        <div>
          <WelcomeMessage />
          <Header />
          <MainContent />
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
          <Footer />
        </div>
      </UserContext.Provider>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
