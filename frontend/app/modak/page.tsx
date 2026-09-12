import React from "react";
import Title from "./title";
import ProductsSection from "../components/ProductsSection";
import { ModakProducts } from "../lib/modak";

function Page() {
  return (
    <div>
      <Title />
      <div className="my-10">
        <ProductsSection
          loadAtOnce={true}
          base_url="/product/kitchen"
          title=""
          products={ModakProducts}
        />
      </div>
    </div>
  );
}

export default Page;
