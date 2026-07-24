import Image from "next/image";
import React from "react";

function ProductCard() {
  const review = 3;
  return (
    <div className="w-full">
      <div className="pb-2  pr-4 relative">
        <Image
          src="/images/demo_product.png"
          width={1024}
          height={680}
          alt="product image"
          className="aspect-square rounded-2xl"
        />
        <Image
          src="/svg/product_card_add_cart_icon.svg"
          width={50}
          height={50}
          className="absolute bottom-0 right-0 w-[22.5%]"
          alt="add to cart button"
        />
      </div>
      <div className="flex font-dm gap-2">
        <div className="font-black text-foreground text-[20px]">$50</div>
        <div className="font-medium line-through text-[10px] text-[#8C8C8C]">
          $80
        </div>
      </div>
      <div className="truncate text-[12px] font-medium">
        Matte Floral Hair Claw Clip
      </div>
      <div className="flex gap-1">
        <div className="flex">
          {Array.from({ length: review }).map((v, index) => (
            <Image
              key={index}
              src="/svg/review_star_solid.svg"
              alt="new solid star"
              width={10}
              height={10}
            />
          ))}
          {Array.from({ length: 5 - review }).map((v, index) => (
            <Image
              key={index}
              src="/svg/review_star_outline.svg"
              alt="new solid star"
              width={10}
              height={10}
            />
          ))}
        </div>
        <div className="font-dm text-[10px] font-medium text-[#8C8C8C]">
          384
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
