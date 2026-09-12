"use client";

import { useRef } from "react";
import IncludedItemCard from "./includedItemCard";
import "./includedItems.css";
import { IncludedItemDataType } from "@/app/lib/hamperData";

type Props = {
  items: IncludedItemDataType[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
};

export default function IncludedItems({
  items,
  onIncrease,
  onDecrease,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "right" ? 240 : -240,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-dm text-4 font-bold text-primary">
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-sm text-white">
              1
            </span>
            Included in this hamper
          </h2>

          <p className="text-[14px] pl-7 font-dm  text-neutral-500">
            These items come with your selected hamper.
          </p>
        </div>

        <div className="flex gap-1">
          <button
            onClick={() => scroll("left")}
            className="rounded-full p-2 hover:bg-neutral-100"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m14.97 20.03-7.145-7.145a1.258 1.258 0 0 1 0-1.77L14.97 3.97l1.06 1.06L9.06 12l6.97 6.97-1.06 1.06Z"
                fill="#202023"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="rounded-full p-2 hover:bg-neutral-100"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9.78 18.78-1.06-1.06L14.44 12 8.72 6.28l1.06-1.06 5.895 5.895c.485.485.485 1.28 0 1.77L9.78 18.78Z"
                fill="#202023"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
      >
        {items.map((item) => (
          <IncludedItemCard
            key={item.id}
            image={item.image}
            name={item.name}
            quantity={item.quantity}
            onIncrease={() => onIncrease(item.id)}
            onDecrease={() => onDecrease(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
