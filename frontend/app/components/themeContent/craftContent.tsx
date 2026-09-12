import React from "react";
import ProductsSection from "../ProductsSection";
import { Products } from "@/app/lib/products";
import { EmbroideryArtProducts } from "@/app/lib/embroidery_art";
import CraftHeroSection from "../heroSection/craftHeroSection";

function CraftContent() {
  return (
    <>
      <CraftHeroSection />
      <ProductsSection
        title="Our Products"
        products={Products}
        base_url="/product/"
      />
      <ProductsSection
        title="Embroidery Art"
        products={EmbroideryArtProducts}
        base_url="/product/embroidery-art"
      />
    </>
  );
}

export default CraftContent;
