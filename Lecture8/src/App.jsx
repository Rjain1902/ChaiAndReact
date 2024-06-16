import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const clickHandler = (action) => {
    if (action === "increment") {
      if (count < 20) {
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
      }
    } else {
      return count > 0 ? setCount(count - 1) : "";
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => clickHandler("increment")}>Increment</button>
      <button onClick={() => clickHandler("decrement")}>Decrement</button>
    </>
  );
}
export default App;
