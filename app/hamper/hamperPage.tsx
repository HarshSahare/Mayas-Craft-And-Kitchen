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

function HamperPage() {
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

  const total =
    included.reduce((sum, item) => sum + item.price * item.quantity, 0) +
    addons.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [customMessage, setCustomMessage] = useState("");

  const message = `*New Hamper Order*%0A%0A
*Included Items*%0A
${included
  .filter((item) => item.quantity > 0)
  .map((item) => `• ${item.name} × ${item.quantity}`)
  .join("%0A")}%0A%0A
*Added Items*%0A
${
  addons.filter((item) => item.quantity > 0).length
    ? addons
        .filter((item) => item.quantity > 0)
        .map((item) => `• ${item.name} × ${item.quantity}`)
        .join("%0A")
    : "None"
}%0A%0A

*Custom Message*%0A
${customMessage || "No Custom message"}%0A%0A

*Total*%0A
₹${total}%0A%0A

Please confirm my order.
`;

  const basePack = included.every((item) => item.quantity == 1);
  console.log(basePack);

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
      <HelpBanner info={message} />
      {/* <SummaryBar /> */}
      <BottomCheckout
        total={basePack ? total - 51 : total}
        originalTotal={total}
        info={message}
      />
    </main>
  );
}

export default HamperPage;
