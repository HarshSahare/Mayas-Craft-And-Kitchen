"use client";
import { useState } from "react";
import { FileTextIcon } from "@solar-icons/react/linear/file-text";
import { HeartAngleIcon } from "@solar-icons/react/linear/heart-angle";
import { AltArrowDownIcon } from "@solar-icons/react/linear/alt-arrow-down";
import { AltArrowUpIcon } from "@solar-icons/react/linear/alt-arrow-up";
import { AltArrowUpOutlineIcon } from "@solar-icons/react";
import { EmbroideryArtProductsType } from "@/app/lib/embroidery_art";

export default function DropDownDetail({
  productDetails,
  careInstructions,
}: {
  productDetails?: string[];
  careInstructions?: string;
}) {
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [careOpen, setCareOpen] = useState(true);

  return (
    <section className="w-full text-[#555]">
      {productDetails && productDetails.length > 0 && (
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
                <FileTextIcon size={16} color="#FE7C8E" />
              </span>

              <span
                className="
                text-[14px]
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
              text-[12px]
              leading-[1.45]
              text-[#666]
            "
            >
              <ul className="space-y-1 list-disc pl-4">
                {productDetails
                  ?.filter((detail, index) => index % 2 !== 0)
                  .map((detail, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: detail }}
                    ></li>
                  ))}
              </ul>

              <ul className="space-y-1 list-disc">
                {productDetails
                  ?.filter((detail, index) => index % 2 === 0)
                  .map((detail, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: detail }}
                    ></li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {careInstructions && (
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
                className="text-[#FE7C8E]"
                size={16}
                strokeWidth={1.4}
              />

              <span
                className="
               text-[14px]
                font-bold
                font-sans
                leading-none
                text-[#2F2F30]
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
              text-[12px]
              leading-[1.45]
              text-[#666666]
            "
              dangerouslySetInnerHTML={{ __html: careInstructions }}
            ></div>
          )}
        </div>
      )}
    </section>
  );
}
