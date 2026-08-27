"use client";

import { useState } from "react";
import { AddOnItemsDataType, IncludedItemDataType } from "@/app/lib/hamperData";
import SummaryItem from "./summaryItem";
import SummaryButton from "./summaryButton";
import ExpandedSummary from "./expandedSummary";

type Props = {
  included: IncludedItemDataType[];
  addons: AddOnItemsDataType[];
  onIncreaseIncluded: (id: number) => void;
  onDecreaseIncluded: (id: number) => void;
  onIncreaseAddon: (id: number) => void;
  onDecreaseAddon: (id: number) => void;
  total: number;
  discount?: number;
};

export default function SummarySection({
  included,
  addons,
  onIncreaseIncluded,
  onDecreaseIncluded,
  onIncreaseAddon,
  onDecreaseAddon,
  total,
  discount = 0,
}: Props) {
  const [open, setOpen] = useState(false);

  const totalItems = [...included, ...addons].reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <section className="mt-12">
      <SummaryButton
        open={open}
        setOpen={setOpen}
        discount={discount}
        total={total}
        totalItems={totalItems}
      />

      <ExpandedSummary
        open={open}
        discount={discount}
        total={total}
        totalItems={totalItems}
        included={included}
        addons={addons}
        onIncreaseIncluded={onIncreaseIncluded}
        onDecreaseIncluded={onDecreaseIncluded}
        onIncreaseAddon={onIncreaseAddon}
        onDecreaseAddon={onDecreaseAddon}
      />
    </section>
  );
}


