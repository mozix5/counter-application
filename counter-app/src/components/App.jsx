import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  let color = "green";
  if (count >= 5 && count <= 9) {
    color = "blue";
  } else if (count === 10) {
    color = "red";
  }
  return (
    <div>
      <div className="container">
        <h1 style={{ color: color }}>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
