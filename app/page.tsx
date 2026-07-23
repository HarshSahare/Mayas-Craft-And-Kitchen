import SearchBar from "./components/searchBar";
import ToogleSection from "./components/toogleSection";

export default function Home() {
  return (
    <>
      <div className="font-dm text-[20px] font-extrabold bg-navbar">
        Every Occasion Deserves
        <br /> Something Special.
      </div>
      <div className="sticky top-16 bg-navbar shadow-[0_4px_8px_-2px_rgba(0,0,0,0.12)]">
        <SearchBar />
        <ToogleSection />
      </div>
    </>
  );
}
