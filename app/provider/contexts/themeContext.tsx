"use client";
import React, { createContext, useContext, useState } from "react";

type ThemesType = "craft" | "kitchen";

type ThemeContextType = {
  theme: ThemesType;
  setTheme: (theme: ThemesType) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemesType>("craft");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "craft" ? "kitchen" : "craft"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
        toggleTheme: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
