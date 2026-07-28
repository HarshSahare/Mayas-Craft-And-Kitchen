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
          className="w-full object-cover rounded-2xl"
        />

        <button
          onClick={onDecrease}
          className="absolute cursor-pointer right-0 top-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-primary transition"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 11.25H4v1.5h16v-1.5Z" fill="#202023" />
          </svg>
        </button>

        <button
          onClick={onIncrease}
          className="absolute cursor-pointer bottom-3 right-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-primary transition"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 11.25h-7.25V4h-1.5v7.25H4v1.5h7.25V20h1.5v-7.25H20v-1.5Z"
              fill="#202023"
            />
          </svg>
        </button>
      </div>

      <p className=" line-clamp-2 font-dm text-[8px] leading-5 text-primary">
        {name}
      </p>

      <p className="mt-auto font-dm text-[15px] font-bold text-primary">
        {quantity} x
      </p>
    </div>
  );
}
