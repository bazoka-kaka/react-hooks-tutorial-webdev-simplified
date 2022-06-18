import { useState } from "react";

// const initialize = () => {
//   console.log("initialize");
//   return 0;
// };

const App = () => {
  // const [count, setCount] = useState(() => initialize());
  const [state, setState] = useState({ count: 0, theme: "blue" });

  const decrement = () => {
    setState((prev) => {
      return { count: prev.count - 1 };
    });
  };

  const increment = () => {
    setState((prev) => {
      return { count: prev.count + 1 };
    });
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
