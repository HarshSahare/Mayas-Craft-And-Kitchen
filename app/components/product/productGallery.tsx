"use client";

import Image from "next/image";
import { useState } from "react";
import "./productGallery.css";

type Props = {
  images: string[];
};

export default function ProductGallery({ images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={images[selectedIndex]}
          alt={`Product Image ${selectedIndex + 1}`}
          width={600}
          height={600}
          priority
          className="aspect-video w-full object-cover transition-all duration-300 bg-[#2b2b2b]"
        />

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-md">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`transition-all duration-300 ${
                selectedIndex === index
                  ? "h-1.5 w-1.5 rounded-full bg-white"
                  : "h-1 w-1 rounded-full bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={image + index}
            onClick={() => setSelectedIndex(index)}
            className={`shrink-0 overflow-hidden rounded-sm transition-all duration-300`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="aspect-video w-20 object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
