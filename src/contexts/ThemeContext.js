import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
console.log(ThemeContext.Provider);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setMode] = useState(true);
  return (
    <ThemeContext.Provider value={{ isDarkMode, tastesLikeChocolate: true }}>
      {children}
    </ThemeContext.Provider>
  );
};
