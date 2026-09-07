import React from "react";
import ProductsSection from "../ProductsSection";
import { Products } from "@/app/lib/products";
import KitchenHeroSection from "../heroSection/kitchenHeroSection";
import { KitchenProducts } from "@/app/lib/kitchen";

function KitchenContent() {
  return (
    <>
      <KitchenHeroSection />
      <ProductsSection
        title="Products"
        products={KitchenProducts}
        base_url="/product/kitchen"
      />
    </>
  );
}

export default KitchenContent;
