import React, { useState } from 'react';

function ColorChanger() {
  const [currentColor, setCurrentColor] = useState('red'); 
  const changeColor = () => {
    const colors = ['red', 'blue', 'green', 'orange','pink','yellow', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  };
  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <div style={{ backgroundColor: currentColor, width: '1800px', height: '700px' }}>
      </div>
    </div>
  );
}

export default ColorChanger;