import React from "react";
import ProductsSection from "../ProductsSection";
import KitchenHeroSection from "../heroSection/kitchenHeroSection";
import { KitchenProducts } from "@/app/lib/kitchen";
import OfferBanner from "../kitchen/offerBanner";
import { ChocolateProducts } from "@/app/lib/chocolate";

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
      <ProductsSection
        title="chocolate"
        products={ChocolateProducts}
        base_url="/product/chocolate"
      />
    </>
  );
}

export default KitchenContent;
