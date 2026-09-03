import HeroSection from "./components/heroSection";
import HomepageStickyComponent from "./components/homepageStickyComponent";
import ProductsSection from "./components/ProductsSection";
import { EmbroideryArtProducts } from "./lib/embroidery_art";
import { Products } from "./lib/products";

export default function Home() {
  return (
    <>
      <HomepageStickyComponent>
        <div className="font-dm text-[20px] font-extrabold">
          Every Occasion Deserves
          <br /> Something Special.
        </div>
      </HomepageStickyComponent>
      <HeroSection />
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
