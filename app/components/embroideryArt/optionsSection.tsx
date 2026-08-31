"use client";
import { EmbroideryArtProductsInputType } from "@/app/lib/embroidery_art";
import React from "react";
import OptionsItem from "./optionsItem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function OptionsSection({
  inputs,
}: {
  inputs: EmbroideryArtProductsInputType[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const optionParams = searchParams.get("inputs") || undefined;

  const onInputChange = (index: number, selectedIndex: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (!optionParams)
      newSearchParams.set(
        "inputs",
        "1".repeat(index) + String(selectedIndex + 1),
      );
    else
      newSearchParams.set(
        "inputs",
        optionParams.slice(0, index) +
          String(selectedIndex + 1) +
          optionParams.slice(index + 1),
      );
    router.replace(`${pathname}?${newSearchParams.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div>
      {inputs.map((input: EmbroideryArtProductsInputType, index: number) => (
        <div key={index} className="mt-4">
          <label
            htmlFor={input.title}
            className="block mb-2 text-[16px] font-semibold text-gray-900 font-dm capitalize"
          >
            {input.title}
          </label>

          <div className="flex items-center gap-2">
            <div className="flex flex-1 overflow-x-scroll scrollbar-none gap-2">
              {input.options.map((option, optionIndex) => {
                return (
                  <OptionsItem
                    selected={
                      optionParams
                        ? Number(optionParams.at(index)) - 1 === optionIndex
                        : optionIndex === 0
                    }
                    onClick={() => {
                      onInputChange(index, optionIndex);
                    }}
                    key={optionIndex}
                    options={option}
                  />
                );
              })}
            </div>
            {input.options.length > 2 && (
              <svg
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.695312 9.375L5.23234 5.33896C5.45836 5.1379 5.45546 4.78375 5.22617 4.58641L0.623593 0.625294"
                  stroke="#8F8E8F"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OptionsSection;
