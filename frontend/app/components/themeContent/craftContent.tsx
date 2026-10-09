import React from "react";
import ProductsSection from "../ProductsSection";
import { Products } from "@/app/lib/products";
import { EmbroideryArtProducts } from "@/app/lib/embroidery_art";
import CraftHeroSection from "../heroSection/craftHeroSection";
import { JewelryProducts } from "@/app/lib/earing";

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
      <ProductsSection
        title="Earings"
        products={JewelryProducts}
        base_url="/product/jewelry"
      />
    </>
  );
}

export default CraftContent;
