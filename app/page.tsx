import HomepageStickyComponent from "./components/homepageStickyComponent";
import ThemeContent from "./components/themeContent/themeContent";

export default function Home() {
  return (
    <>
      <HomepageStickyComponent>
        <div className="font-dm text-[20px] font-extrabold">
          Every Occasion Deserves
          <br /> Something Special.
        </div>
      </HomepageStickyComponent>
      <ThemeContent />
    </>
  );
}
