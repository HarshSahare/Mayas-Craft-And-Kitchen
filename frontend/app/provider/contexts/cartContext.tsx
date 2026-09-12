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
  const [hasLoaded, setHasLoaded] = useState(false);

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

  const CART_STORAGE_KEY = "mayas-cart";

  const serializeCart = (items: CartItemType[]) => {
    return items.map((item) => `${item.id}:${item.quantity}`).join("|");
  };

  const deserializeCart = (value: string): CartItemType[] => {
    if (!value) return [];

    return value
      .split("|")
      .map((item) => {
        const [id, quantity] = item.split(":");

        return {
          id: Number(id),
          quantity: Number(quantity),
        };
      })
      .filter(
        (item) =>
          Number.isInteger(item.id) &&
          Number.isInteger(item.quantity) &&
          item.quantity > 0,
      );
  };

  useEffect(() => {
    if (!hasLoaded) return;

    localStorage.setItem(CART_STORAGE_KEY, serializeCart(items));
  }, [items, hasLoaded]);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (storedCart) {
      setItems(deserializeCart(storedCart));
    }

    setHasLoaded(true);
  }, []);

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
    throw new Error("CartContext must be used within a ThemeProvider");
  }

  return context;
};
