"use client";
import React, { useState } from "react";
import ProductCard from "./productCard";
import { Products, ProductsType } from "../lib/products";
import { EmbroideryArtProductsType } from "../lib/embroidery_art";
import { DoubleAltArrowDownIcon } from "@solar-icons/react/outline";

function ProductsSection({
  title,
  products,
  base_url,
  loadAtOnce = false,
}: {
  title: string;
  products: ProductsType[] | EmbroideryArtProductsType[];
  base_url: string;
  loadAtOnce?: boolean;
}) {
  const [productLimit, setProductLimit] = useState<number>(
    loadAtOnce ? products.length : 4,
  );
  const offset = 4;

  const increaseProductLimit = () => {
    setProductLimit((prev) => prev + offset);
  };

  return (
    <div>
      <div className="text-[20px] font-black font-dm text-[#2B2B2B] pt-4 pb-2 ">
        {title}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: productLimit }, (value, index) => index).map(
          (i) => {
            const p = products.at(i);
            if (p) {
              return (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  image={p.images[0]}
                  currentPrice={p.price}
                  oldPrice={p.oldPrice}
                  rating={p.rating}
                  sold={p.sold}
                  base_url={base_url}
                />
              );
            }
          },
        )}
      </div>
      {productLimit < products.length && (
        <div
          className="text-3 flex gap-1 font-dm w-fit mx-auto text-[#4A2E2B] opacity-90 cursor-pointer hover:opacity-100 my-4"
          onClick={increaseProductLimit}
        >
          View More
          <DoubleAltArrowDownIcon />
        </div>
      )}
    </div>
  );
}

export default ProductsSection;
