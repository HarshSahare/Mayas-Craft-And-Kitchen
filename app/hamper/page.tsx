import AddMoreSection from "../components/hamper/addMoreSection";
import BottomCheckout from "../components/hamper/bottomCheckout";
import CustomizationSection from "../components/hamper/customizationSection";
import HelpBanner from "../components/hamper/helpBanner";
import Hero from "../components/hamper/hero";
import IncludedItems from "../components/hamper/includedItems";

export default function HamperPage() {
  return (
    <main className="bg-background">
      <Hero image="/images/hamper.png" />
      <IncludedItems />
      <AddMoreSection />
      <CustomizationSection />
      <HelpBanner />
      {/* <SummaryBar /> */}
      <BottomCheckout total={699} originalTotal={799} />
    </main>
  );
}
