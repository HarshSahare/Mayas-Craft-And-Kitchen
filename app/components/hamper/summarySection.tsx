"use client";

import { useState } from "react";
import { AddOnItemsDataType, IncludedItemDataType } from "@/app/lib/hamperData";

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
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-background px-5 py-4 transition"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M22 7H2V12H22V7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M12 22V7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M12 7H7.5C6.70435 7 5.94129 6.68393 5.37868 6.12132C4.81607 5.55871 4.5 4.79565 4.5 4C4.5 3.20435 4.81607 2.44129 5.37868 1.87868C5.94129 1.31607 6.70435 1 7.5 1C11 1 12 7 12 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M12 7H16.5C17.2956 7 18.0587 6.68393 18.6213 6.12132C19.1839 5.55871 19.5 4.79565 19.5 4C19.5 3.20435 19.1839 2.44129 18.6213 1.87868C18.0587 1.31607 17.2956 1 16.5 1C13 1 12 7 12 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="text-left">
            <p className="font-dm text-xs text-neutral-500">
              {totalItems} {totalItems === 1 ? "Item" : "Items"}
            </p>

            <p className="font-dm text-lg font-bold text-primary">
              ₹{Math.max(0, total - discount)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-dm text-sm font-semibold text-primary">
            {open ? "Hide Summary" : "View Summary"}
          </span>

          <svg
            className={`h-5 w-5 text-primary transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* BODY */}

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 rounded-2xl border border-neutral-200 bg-background p-5">
          {/* Included */}

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

          {/* Addons */}

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

          {/* Quote */}

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

                {discount != 0 && (
                  <span className="font-dm text-xl font-bold text-primary">
                    ₹{Math.max(0, total - discount)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryItem({
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
}: {
  name: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-dm text-[15px] font-medium text-primary">{name}</h4>

        <p className="mt-1 font-dm text-xs text-neutral-500">₹{price} each</p>
      </div>

      <div className="flex items-center rounded-full border border-neutral-200 bg-background">
        <button
          onClick={onDecrease}
          className="flex h-9 w-9 items-center justify-center text-lg text-primary transition hover:bg-neutral-100"
        >
          −
        </button>

        <span className="min-w-[28px] text-center font-dm font-semibold text-primary">
          {quantity}
        </span>

        <button
          onClick={onIncrease}
          className="flex h-9 w-9 items-center justify-center text-lg text-primary transition hover:bg-neutral-100"
        >
          +
        </button>
      </div>
    </div>
  );
}

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
