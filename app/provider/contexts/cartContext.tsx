"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type CartItemType = {
  id: number;
  quantity: number;
};

type CartProviderContext = {
  items: CartItemType[];
  addItemToCart: (id: number) => void;
  setItemToCart: (id: number, quantity: number) => void;
  reset: () => void;
};

const CartContext = createContext<CartProviderContext | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItemType[]>([]);

  const addItemToCart = (id: number) => {
    setItems((prev) => {
      const exist = prev.some((value) => value.id === id);
      if (!exist) return [...prev, { id, quantity: 1 }];
      return prev.map((item: CartItemType) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  };

  const setItemToCart = (id: number, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) return prev.filter((val) => val.id !== id);
      return prev.map((val) =>
        val.id == id ? { ...val, quantity: quantity } : val,
      );
    });
  };

  const reset = () => setItems([]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        setItemToCart,
        reset,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
