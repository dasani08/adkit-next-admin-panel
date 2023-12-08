'use client';
import React from 'react';

const ThemeContext = React.createContext({
  theme: 'light',
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  const switchTheme = (t) => setTheme(t);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
