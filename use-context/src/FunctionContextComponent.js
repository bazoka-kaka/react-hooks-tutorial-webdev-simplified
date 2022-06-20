import { useThemeContext, useThemeContextUpdate } from "./ThemeContext";

const FunctionContextComponent = () => {
  const darkTheme = useThemeContext();
  const toggleTheme = useThemeContextUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>FunctionContextComponent</div>
    </>
  );
};

export default FunctionContextComponent;
