import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setMode] = useState(true);
  const switchMode = () => {
    setMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, switchMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
