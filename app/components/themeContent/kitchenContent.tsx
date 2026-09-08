import React from "react";
import ProductsSection from "../ProductsSection";
import { Products } from "@/app/lib/products";
import KitchenHeroSection from "../heroSection/kitchenHeroSection";
import { KitchenProducts } from "@/app/lib/kitchen";
import OfferBanner from "../kitchen/offerBanner";

function KitchenContent() {
  return (
    <>
      <KitchenHeroSection />
      <OfferBanner />
      <ProductsSection
        title="Products"
        products={KitchenProducts}
        base_url="/product/kitchen"
      />
    </>
  );
}

export default KitchenContent;
