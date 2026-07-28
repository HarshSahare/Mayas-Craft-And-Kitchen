import HeroSection from "./components/heroSection";
import HomepageStickyComponent from "./components/homepageStickyComponent";
import SearchBar from "./components/searchBar";
import TrendingProducts from "./components/trendingProducts";
import Navbar from "./layout/navbar";

export default function Home() {
  return (
    <>
      <HomepageStickyComponent ignoreHomePageRule>
        <div className="font-dm text-[20px] font-extrabold bg-navbar">
          Every Occasion Deserves
          <br /> Something Special.
        </div>
      </HomepageStickyComponent>
      <HeroSection />
      <TrendingProducts />
    </>
  );
}
