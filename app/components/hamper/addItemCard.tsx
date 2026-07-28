"use client";

import Image from "next/image";

type Props = {
  image: string;
  name: string;
  price: number;
  onAdd: () => void;
};

export default function AddItemCard({ image, name, price, onAdd }: Props) {
  return (
    <div className="w-[165px] shrink-0">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <div className="relative aspect-square">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <div className="p-3">
          <p className="line-clamp-2 font-dm text-[8px] font-medium text-[#8C8C8C]">
            {name}
          </p>

          <div className="flex items-center justify-between">
            <span className="font-dm text-[10px] font-bold text-primary">
              ₹{price}
            </span>

            <button
              onClick={onAdd}
              className="flex h-8 w-8 cursor-pointer text-[10px] items-center justify-center rounded-full bg-primary text-white transition hover:scale-105"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11.25h-7.25V4h-1.5v7.25H4v1.5h7.25V20h1.5v-7.25H20v-1.5Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
