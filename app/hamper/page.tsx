"use client";
import { useState } from "react";
import AddMoreSection from "../components/hamper/addMoreSection";
import BottomCheckout from "../components/hamper/bottomCheckout";
import CustomizationSection from "../components/hamper/customizationSection";
import HelpBanner from "../components/hamper/helpBanner";
import Hero from "../components/hamper/hero";
import {
  AddOnItemsData,
  AddOnItemsDataType,
  IncludedItemDataType,
  IncludedItemsData,
} from "../lib/hamperData";
import IncludedItems from "../components/hamper/includedItems";

export default function HamperPage() {
  const [included, setIncluded] =
    useState<IncludedItemDataType[]>(IncludedItemsData);

  const increaseIncludedItems = (id: number) => {
    setIncluded((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseIncludedItems = (id: number) => {
    setIncluded((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(0, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  const [addons, setAddons] = useState<AddOnItemsDataType[]>(AddOnItemsData);

  const addAddons = (id: number) => {
    setAddons((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const total = included.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  ) + addons.reduce((sum,item) => sum + (item.price * item.quantity) , 0);

  const [customMessage, setCustomMessage] = useState("");
  return (
    <main className="bg-background">
      <Hero image="/images/hamper.png" />
      <IncludedItems
        items={included}
        onIncrease={increaseIncludedItems}
        onDecrease={decreaseIncludedItems}
      />
      <AddMoreSection products={addons} addItems={addAddons} />
      <CustomizationSection
        customMessage={customMessage}
        setCustomMessage={setCustomMessage}
      />
      <HelpBanner />
      {/* <SummaryBar /> */}
      <BottomCheckout total={total} />
    </main>
  );
}
