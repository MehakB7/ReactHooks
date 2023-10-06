import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>count is : {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Incremet</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Decrement</button>
    </>
  );
};

Counter.propTypes = {};

export default Counter;
