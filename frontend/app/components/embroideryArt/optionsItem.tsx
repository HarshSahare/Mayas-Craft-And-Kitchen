import { EmbroideryArtProductsInputOptionType } from "@/app/lib/embroidery_art";
import Image from "next/image";
import React from "react";

function OptionsItem({
  options,
  selected,
  onClick,
}: {
  options: EmbroideryArtProductsInputOptionType;
  selected: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`min-w-[49%] px-2 py-2 border-[1.75px] ${selected ? "bg-[#FFF4F4] border-[#FE7C8E]" : "border-[#F0EDEC]"} rounded-xl font-dm font-semibold relative cursor-pointer`}
      onClick={() => onClick && onClick()}
    >
      <div className=" text-[17.47px]">{options.option}</div>
      <div className="text-[13.98px]">₹{options.price}</div>

      {selected && (
        <div className="absolute bottom-2 right-2">
          <Image
            src={"/svg/selectedOptionTick.svg"}
            alt="selected"
            width={17.47}
            height={17.47}
          />
        </div>
      )}
    </div>
  );
}

export default OptionsItem;
