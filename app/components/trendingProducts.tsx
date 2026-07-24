import React from "react";
import ProductCard from "./productCard";

function TrendingProducts() {
  return (
    <div className="my-4">
      <div className="text-[16px] font-black font-dm text-[#2B2B2B] ">
        Popular Today
      </div>
      <div className="grid grid-cols-2 gap-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default TrendingProducts;
