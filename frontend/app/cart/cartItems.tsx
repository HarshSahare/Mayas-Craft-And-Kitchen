"use client";

import Image from "next/image";
import Link from "next/link";

import { useCartContext } from "../provider/contexts/cartContext";
import { MinusCircleIcon } from "@solar-icons/react/outline";
import { AddCircleLinearIcon } from "@solar-icons/react";
import { TrashBinMinimalisticIcon } from "@solar-icons/react/linear";

type CartItemProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  description: string;
  quantity: number;
  baseUrl: string;
};

const CartItem = ({
  id,
  name,
  image,
  price,
  description,
  quantity,
  baseUrl,
  oldPrice,
}: CartItemProps) => {
  const { setItemToCart } = useCartContext();

  const slug = name.toLowerCase().trim().replace(/\s+/g, "-");

  return (
    <div className="rounded-2xl border border-[#E4C8BA] bg-white p-3">
      <div className="flex gap-3">
        {/* Product Image */}
        <Link
          href={`${baseUrl}/${id}-${slug}`}
          className="relative size-[105px] shrink-0 overflow-hidden rounded-xl"
        >
          <Image
            src={image}
            alt={`${name} image`}
            fill
            sizes="105px"
            className="object-cover"
          />
        </Link>

        {/* Product Information */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div>
            <Link href={`${baseUrl}/${id}-${slug}`} className="block">
              <h2 className="truncate font-dm text-[16px] font-semibold leading-tight text-[#2B2B2B]">
                {name}
              </h2>
            </Link>

            <p className="mt-1 line-clamp-2 font-dm text-[12px] leading-[1.35] text-[#8C8C8C]">
              {description}
            </p>
          </div>

          {/* Price */}
          <div className="mt-auto pt-2 flex gap-1">
            <span className="font-dm text-[19px] font-black text-foreground">
              ₹{price}
            </span>
            {oldPrice && (
              <div className="font-medium line-through text-[10px] text-[#8C8C8C] mt-1">
                ₹{oldPrice}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="mt-3 flex items-center justify-between">
        {/* Quantity */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setItemToCart(id, quantity - 1)}
            className="text-[#9B4B2B] cursor-pointer"
            aria-label="Decrease quantity"
          >
            <MinusCircleIcon size={25} />
          </button>

          <span className="w-5 text-center font-dm text-sm font-semibold text-[#2B2B2B]">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() => setItemToCart(id, quantity + 1)}
            className="text-[#9B4B2B] cursor-pointer"
            aria-label="Increase quantity"
          >
            <AddCircleLinearIcon size={25} />
          </button>
        </div>

        {/* Remove */}
        <button
          type="button"
          onClick={() => setItemToCart(id, 0)}
          className="flex items-center gap-1 text-[#9B4B2B] cursor-pointer"
          aria-label={`Remove ${name}`}
        >
          <TrashBinMinimalisticIcon size={19} />

          <span className="font-dm text-xs">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
