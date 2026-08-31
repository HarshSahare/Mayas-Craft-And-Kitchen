"use client";
import { useState } from "react";
import { FileTextIcon } from "@solar-icons/react/linear/file-text";
import { HeartAngleIcon } from "@solar-icons/react/linear/heart-angle";
import { AltArrowDownIcon } from "@solar-icons/react/linear/alt-arrow-down";
import { AltArrowUpIcon } from "@solar-icons/react/linear/alt-arrow-up";
import { AltArrowUpOutlineIcon } from "@solar-icons/react";

export default function DropDownDetail() {
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [careOpen, setCareOpen] = useState(true);

  return (
    <section className="w-full text-[#555]">
      <div className="border rounded-xl border-[#FED1D1] my-2">
        {/* Header */}
        <button
          type="button"
          onClick={() => setDetailsOpen(!detailsOpen)}
          className="
            flex w-full items-center justify-between
            px-3 py-3
            text-left
          "
        >
          <div className="flex items-center gap-2">
            <span className="text-[#333]">
              <FileTextIcon size={12} color="#FE7C8E" />
            </span>

            <span
              className="
                text-[10px]
                font-bold
                font-sans
                leading-none
                text-[#333]
              "
            >
              Product Details
            </span>
          </div>

          {detailsOpen ? (
            <AltArrowUpIcon
              className="h-3.5 w-3.5 text-[#777]"
              strokeWidth={1.5}
            />
          ) : (
            <AltArrowDownIcon
              className="h-3.5 w-3.5 text-[#777]"
              strokeWidth={1.5}
            />
          )}
        </button>

        {/* Content */}
        {detailsOpen && (
          <div
            className="
              grid grid-cols-2 gap-x-8 gap-y-1
              px-3 pb-3
              text-[8px]
              leading-[1.45]
              text-[#666]
            "
          >
            <div className="space-y-1">
              <p>• Material: Cotton Fabric &amp; Wooden Hoop</p>

              <p>• Work: Hand Embroidery</p>

              <p>• Size: 10 × 3 inches</p>

              <p>• Colour: Multicolour</p>

              <p>• Net Quantity: 1</p>
            </div>

            <div className="space-y-1">
              <p>• Handmade &amp; Unique</p>

              <p>• Suitable for: Home Decor &amp; Gifting</p>

              <p>
                • Occasion: Birthdays, Anniversaries, Wedding, Housewarming,
                Naming Ceremony &amp; Special Occasions
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="border rounded-xl border-[#FED1D1]">
        <button
          type="button"
          onClick={() => setCareOpen(!careOpen)}
          className="
            flex w-full items-center justify-between
            px-3 py-3
            text-left
          "
        >
          <div className="flex items-center gap-2">
            <HeartAngleIcon
              className="h-3.5 w-3.5 text-[#FE7C8E]"
              strokeWidth={1.4}
            />

            <span
              className="
               text-[10px]
                font-bold
                font-sans
                leading-none
                text-[#333]
              "
            >
              Care Instructions
            </span>
          </div>

          {careOpen ? (
            <AltArrowUpOutlineIcon
              className="h-3.5 w-3.5 text-[#777]"
              strokeWidth={1.5}
            />
          ) : (
            <AltArrowDownIcon
              className="h-3.5 w-3.5 text-[#777]"
              strokeWidth={1.5}
            />
          )}
        </button>

        {/* Content */}
        {careOpen && (
          <div
            className="
              px-3 pb-3
              text-[9px]
              leading-[1.45]
              text-[#666]
            "
          >
            <p>Keep away from moisture and direct sunlight.</p>

            <p className="mt-1">Dust gently with a soft, dry cloth.</p>
          </div>
        )}
      </div>
    </section>
  );
}
