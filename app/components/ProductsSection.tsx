import React from "react";
import ProductCard from "./productCard";
import { Products, ProductsType } from "../lib/products";
import { EmbroideryArtProductsType } from "../lib/embroidery_art";

function ProductsSection({
  title,
  products,
  base_url,
}: {
  title: string;
  products: ProductsType[] | EmbroideryArtProductsType[];
  base_url: string;
}) {
  return (
    <div className="my-4">
      <div className="text-[16px] font-black font-dm text-[#2B2B2B] my-2 ">
        {title}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {products.map((p) => (
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
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
