import React from "react";

interface PriceCardProps {
  price: number;
  originalPrice?: number;
  size: string;
}

function PriceBox({ price, originalPrice, size }: PriceCardProps) {
  return (
    <div className="relative flex my-5 w-full font-dm items-center justify-between rounded-xl border border-[#A6532E] px-[15px] py-2.5 text-[#9B4B2B]">
      {/* Label */}
      <span className="absolute font-semibold  -top-[11px] left-[14px] bg-background px-[8px] text-[12px]  leading-5">
        <div className="absolute w-1 h-1 -translate-y-1/3 rounded-[50%] bg-[#9B4B2B] left-0 top-1/2"></div>
        Price
        <div className="absolute w-1 h-1 -translate-y-1/3 rounded-[50%] bg-[#9B4B2B] right-0 top-1/2"></div>
      </span>

      {/* Price */}
      <div className="flex items-center gap-[5px]">
        <span className="text-[18px] font-bold leading-none text-[#2B2B2B]">
          ₹{price}
        </span>

        {originalPrice && (
          <span className="self-start text-[10px] leading-none text-[#999] line-through">
            ₹{originalPrice}
          </span>
        )}
      </div>

      {/* Size */}
      <div className="flex items-center justify-end gap-1 text-[10px] font-medium">
        <div dangerouslySetInnerHTML={{ __html: icon }}></div>
        <span className="mt-2">{size}</span>
      </div>
    </div>
  );
}

const icon = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="18" height="18" fill="url(#pattern0_1338_355)"/>
<defs>
<pattern id="pattern0_1338_355" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1338_355" transform="scale(0.0104167)"/>
</pattern>
<image id="image0_1338_355" width="96" height="96" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;

export default PriceBox;
