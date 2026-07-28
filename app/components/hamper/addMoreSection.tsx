"use client";

import { useRef } from "react";
import AddItemCard from "./addItemCard";
import "./includedItems.css";

const products = [
  {
    id: 1,
    name: "Custom Photo Frame",
    image: "/images/hamper_addons_1.png",
    price: 80,
  },
  {
    id: 2,
    name: "Beautiful Mini Cards",
    image: "/images/hamper_addons_2.png",
    price: 80,
  },
  {
    id: 3,
    name: "Lighting",
    image: "/images/hamper_addons_3.png",
    price: 80,
  },
  {
    id: 4,
    name: "Chocolate",
    image: "/images/hamper_addons_4.png",
    price: 80,
  },
];

export default function AddMoreSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "right" ? 240 : -240,
      behavior: "smooth",
    });
  };

  const addItem = (id: number) => {
    console.log("Added:", id);
  };

  return (
    <section className="mt-14">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-dm text-[12px] font-bold text-primary">
            <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-sm text-white">
              2
            </span>
            Add more to your hamper
          </h2>

          <p className="pl-6 font-dm text-[10px] text-neutral-500">
            Make it even more special by adding these popular items.
          </p>
        </div>

        <div className="flex ">
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
        className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
      >
        {products.map((product) => (
          <AddItemCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            onAdd={() => addItem(product.id)}
          />
        ))}
      </div>
    </section>
  );
}
