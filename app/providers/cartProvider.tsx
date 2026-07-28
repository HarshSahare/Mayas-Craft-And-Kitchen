import React, { useState } from "react";
import { Products, ProductsType } from "../lib/products";

type CartContextType = {
  cart: Record<
    (typeof Products)[number]["id"],
    ProductsType & { quantity: number; totalPrice: number }
  >;
  append: () => void;
  remove: () => void;
  clear: () => void;
  set: () => void;
};

function CartProvider() {
  const [cart, setCart] = useState<
    Record<
      (typeof Products)[number]["id"],
      ProductsType & { quantity: number; totalPrice: number }
    >
  >({});
  const append = (id: number) => {
    if (id in cart) {
        
    }
  };
  return <div>CartProvider</div>;
}

export default CartProvider;
