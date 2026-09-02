import React from "react";
import { ThemeProvider } from "./contexts/themeContext";

function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Provider;
