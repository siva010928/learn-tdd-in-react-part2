import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
        <h1 data-testid="counter">{counter}</h1>
        <button data-testid="up-button" onClick={()=>{setCounter(counter + 1)}}>Increment</button>
        <button disabled data-testid="down-button" onClick={()=>{setCounter(counter - 1)}}>Decrement</button>
    </>
  );
};

export default Counter;
