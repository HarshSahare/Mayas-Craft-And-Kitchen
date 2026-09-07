import React from "react";
import Title from "./title";
import ProductsSection from "../components/ProductsSection";
import { ModakProducts } from "../lib/modak";

function Page() {
  return (
    <div>
      <Title />
      <div className="mt-2">
        <ProductsSection
          base_url="/product/kitchen"
          title=""
          products={ModakProducts}
        />
      </div>
    </div>
  );
}

export default Page;
