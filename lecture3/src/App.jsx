import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    return counter < 20 ? setCounter(counter + 1) : "";
  };

  const decrement = () => {
    return counter > 0 ? setCounter(counter - 1) : "";
  };

  return (
    <>
      <h1>React Lecture 3</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increment}>Add value</button>
      <br />
      <button onClick={decrement}>Remove value</button>
    </>
  );
}

export default App;
