import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeContextUpdate = React.createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useThemeContextUpdate = () => {
  return useContext(ThemeContextUpdate);
};

export const ContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeContextUpdate.Provider value={toggleTheme}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
