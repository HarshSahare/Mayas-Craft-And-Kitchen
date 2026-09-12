import { AddOnItemsDataType, IncludedItemDataType } from "@/app/lib/hamperData";
import React from "react";
import SummaryItem from "./summaryItem";

function ExpandedSummary({
  open,
  totalItems,
  total,
  discount,
  onIncreaseIncluded,
  onDecreaseIncluded,
  onIncreaseAddon,
  onDecreaseAddon,
  included,
  addons,
}: {
  open: boolean;
  totalItems: number;
  total: number;
  discount: number;
  onIncreaseIncluded: (id: number) => void;
  onDecreaseIncluded: (id: number) => void;
  onIncreaseAddon: (id: number) => void;
  onDecreaseAddon: (id: number) => void;
  included: IncludedItemDataType[];
  addons: AddOnItemsDataType[];
}) {
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ${
        open ? "max-h-300 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="mt-4 rounded-2xl border border-neutral-200 bg-background p-5">
        <h3 className="font-dm text-base font-semibold text-primary">
          Included Items
        </h3>

        <div className="mt-4 space-y-4">
          {included.map((item) => (
            <SummaryItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onIncrease={() => onIncreaseIncluded(item.id)}
              onDecrease={() => onDecreaseIncluded(item.id)}
            />
          ))}
        </div>

        {addons.length > 0 && (
          <>
            <div className="my-6 border-t border-neutral-200" />
            <h3 className="font-dm text-base font-semibold text-primary">
              Added Items
            </h3>
            <div className="mt-4 space-y-4">
              {addons.map((item) => (
                <SummaryItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onIncrease={() => onIncreaseAddon(item.id)}
                  onDecrease={() => onDecreaseAddon(item.id)}
                />
              ))}
            </div>
          </>
        )}

        <div className="my-8">
          <p className="text-center font-dancing text-2xl text-primary">
            Made with love ♥
          </p>
        </div>

        <div className="border-t border-neutral-200 pt-5">
          <div className="space-y-3">
            <Row label="Items" value={totalItems.toString()} />

            <Row label="Subtotal" value={`₹${total}`} />

            {discount != 0 && (
              <Row label="Hamper Discount" value={`-₹${discount}`} green />
            )}

            <div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-4">
              <span className="font-dm text-lg font-bold text-primary">
                Total
              </span>

              <span className="font-dm text-xl font-bold text-primary">
                ₹{Math.max(0, total - discount)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedSummary;

function Row({
  label,
  value,
  green = false,
}: {
  label: string;
  value: string;
  green?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-dm text-sm text-neutral-500">{label}</span>

      <span
        className={`font-dm font-semibold ${
          green ? "text-green-600" : "text-primary"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
