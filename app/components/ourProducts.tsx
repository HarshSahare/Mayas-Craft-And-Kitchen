import React from "react";
import ProductCard from "./productCard";

function OurProducts() {
  const product = [
    {
      id: 1,
      name: "Premium silicone friendship wrist band",
      image: "/images/product_1_1.jpeg",
      currentPrice: 120,
      description: "Contain 10 pieces and colors available",
    },
    {
      id: 2,
      name: "Beaded bracelet with heart shape charm",
      image: "/images/product_2_1.jpeg",
      currentPrice: 300,
      description: "Contain 4 pieces and colors available",
    },
    {
      id: 3,
      name: "101 reasons why I love you",
      image: "/images/product_3_1.jpeg",
      currentPrice: 249,
      description: "No color option",
    },
  ];

  return (
    <div className="my-4">
      <div className="text-[16px] font-black font-dm text-[#2B2B2B] ">
        Our Products
      </div>
      <div className="grid grid-cols-2 gap-2">
        {product.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            image={p.image}
            currentPrice={p.currentPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default OurProducts;
