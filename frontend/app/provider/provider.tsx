import React from "react";
import { ThemeProvider } from "./contexts/themeContext";
import CartProvider from "./contexts/cartContext";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}

export default Provider;
