import { useState } from "react";

const AsyncCounter = () => {
    const [counter, setCounter] = useState(0);

    const increaseCountByDelay = () => {
        setTimeout(() => {
            setCounter(counter + 1);
        }, 500);
    }

    return (
      <>
          <h1 data-testid="Counter">{counter}</h1>
          <button data-testid="up-button" onClick={increaseCountByDelay}>Increment</button>
          <button data-testid="down-button" onClick={()=>{setCounter(counter - 1)}}>Decrement</button>
      </>
    );
}
export default AsyncCounter;