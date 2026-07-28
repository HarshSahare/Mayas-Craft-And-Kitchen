import React from "react";
import ProductCard from "./productCard";
import { Products } from "../lib/products";

function OurProducts() {
  return (
    <div className="my-4">
      <div className="text-[16px] font-black font-dm text-[#2B2B2B] my-2 ">
        Our Products
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            image={p.images[0]}
            currentPrice={p.price}
          />
        ))}
      </div>
    </div>
  );
}

export default OurProducts;
