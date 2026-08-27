import Image from "next/image";
import React from "react";

function SummaryButton({
  open,
  setOpen,
  totalItems,
  total,
  discount,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  totalItems: number;
  total: number;
  discount: number;
}) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-background px-5 py-4 transition"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
            <Image
              src="svg/hamper_gift_icon.svg"
              alt="Gift"
              width={20}
              height={20}
            />
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
  );
}

export default SummaryButton;
