"use client";

import Image from "next/image";

type Props = {
  image: string;
  name: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function IncludedItemCard({
  image,
  name,
  quantity,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <div className="w-[170px] flex flex-col shrink-0">
      <div className="relative  overflow-hidden  pr-3">
        <Image
          src={image}
          alt={name}
          width={101}
          height={118}
          className="w-[200px] aspect-square object-cover rounded-2xl"
        />

        <button
          onClick={onDecrease}
          className="absolute cursor-pointer right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background text-primary transition"
        >
          <svg
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 10h14v1.5H3z" fill="#202023" />
          </svg>
        </button>

        <button
          onClick={onIncrease}
          className="absolute cursor-pointer bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background text-primary transition"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4V16M4 10H16"
              stroke="#202023"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <p className=" line-clamp-2 font-dm text-[12px] leading-5 text-primary">
        {name}
      </p>

      <p className="mt-auto font-dm text-[15px] font-bold text-primary">
        {quantity} x
      </p>
    </div>
  );
}
