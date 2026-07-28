import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({
  id,
  name,
  image,
  currentPrice,
  oldPrice,
  rating=2,
  sold,
}: {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  oldPrice?: number;
  rating?: number;
  sold?: number;
}) {
  return (
    <Link
      href={`/product/${id}-${name.toLocaleLowerCase().split(" ").join("-")}`}
      className="w-full "
    >
      <div className="pb-2  pr-4 relative">
        <Image
          src={image}
          width={1024}
          height={680}
          alt={`${name} image`}
          className="aspect-square rounded-2xl object-cover"
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
        <div className="font-black text-foreground text-[20px]">
          ₹{currentPrice}
        </div>
        {oldPrice && (
          <div className="font-medium line-through text-[10px] text-[#8C8C8C] mt-1">
            ₹{oldPrice}
          </div>
        )}
      </div>
      <div className="truncate text-[12px] font-dm font-medium capitalize">
        {name}
      </div>
      <div className="flex gap-1">
        {rating && (
          <div className="flex">
            {Array.from({ length: rating }).map((v, index) => (
              <Image
                key={index}
                src="/svg/review_star_solid.svg"
                alt="new solid star"
                width={10}
                height={10}
              />
            ))}
            {Array.from({ length: 5 - rating }).map((v, index) => (
              <Image
                key={index}
                src="/svg/review_star_outline.svg"
                alt="new solid star"
                width={10}
                height={10}
              />
            ))}
          </div>
        )}

        {sold && (
          <div className="font-dm text-[10px] font-medium text-[#8C8C8C]">
            {sold}
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
