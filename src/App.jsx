import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState(getRandomColor());

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <h1>🎨 Colorful Test Page</h1>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default App;
