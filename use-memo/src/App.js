import { useState, useMemo, useEffect } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // so that you don't recompute something that takes real long time
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  // so that you don't create
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("themeStyles object created!");
  }, [dark]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>

      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i < 100000000; ++i) {}
  return num * 2;
}

export default App;
