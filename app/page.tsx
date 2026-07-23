import SearchBar from "./components/searchBar";
import ToogleSection from "./components/toogleSection";

export default function Home() {
  return (
    <>
      <div className="font-dm text-[20px] font-extrabold bg-navbar">
        Every Occasion Deserves
        <br /> Something Special.
      </div>
      <div className="sticky top-16 bg-navbar drop-shadow-sm">
        <SearchBar />
        <ToogleSection />
      </div>
    </>
  );
}
