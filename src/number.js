import React, { useState } from 'react';

function NumberCounter() {
  const [currentNumber, setCurrentNumber] = useState(0);

  const incrementNumber = () => {
    if (currentNumber < 10) {
      setCurrentNumber(currentNumber + 1);
    }
  };

  const decrementNumber = () => {
    if (currentNumber > 0) {
      setCurrentNumber(currentNumber - 1);
    }
  };

  return (
    <div>
      <h1>Current Number: {currentNumber}</h1>

      <button onClick={incrementNumber}>Increment</button>

      <button onClick={decrementNumber}>Decrement</button>
    </div>
  );
}

export default NumberCounter;