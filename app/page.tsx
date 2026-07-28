import HeroSection from "./components/heroSection";
import HomepageStickyComponent from "./components/homepageStickyComponent";
import OurProducts from "./components/ourProducts";

export default function Home() {
  return (
    <>
      <HomepageStickyComponent>
        <div className="font-dm text-[20px] font-extrabold bg-navbar">
          Every Occasion Deserves
          <br /> Something Special.
        </div>
      </HomepageStickyComponent>
      <HeroSection />
      <OurProducts />
    </>
  );
}
