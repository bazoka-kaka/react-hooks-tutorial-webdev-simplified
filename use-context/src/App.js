import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ContextProvider } from "./ThemeContext";

const App = () => {
  return (
    <ContextProvider>
      <FunctionContextComponent />
    </ContextProvider>
  );
};

export default App;
