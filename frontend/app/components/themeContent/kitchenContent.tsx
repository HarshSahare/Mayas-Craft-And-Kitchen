import React from "react";
import ProductsSection from "../ProductsSection";
import { Products } from "@/frontend/app/lib/products";
import KitchenHeroSection from "../heroSection/kitchenHeroSection";
import { KitchenProducts } from "@/frontend/app/lib/kitchen";
import OfferBanner from "../kitchen/offerBanner";

function KitchenContent() {
  return (
    <>
      <KitchenHeroSection />
      <OfferBanner />
      <ProductsSection
        loadAtOnce={true}
        title="Products"
        products={KitchenProducts}
        base_url="/product/kitchen"
      />
    </>
  );
}

export default KitchenContent;
