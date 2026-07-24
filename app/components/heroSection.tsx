import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="overflow-hidden py-2 relative after:content-[''] after:absolute after:z-[-2] after:w-[120%] after:h-full after:-translate-y-1/2 after:translate-x-[-10%] after:bg-[#FFC0CB] after:top-0 after:left-0 after:blur-lg before:content-[''] before:absolute before:z-[-2] before:w-[120%] before:h-[50%] before:translate-x-[-10%] before:bg-linear-to-b before:from-[#FFC0CB] before:to-background before:bg-to before:bottom-0 before:left-0 before:blur-[150px] ">
      <div className="-z-1 absolute inset-0 ">
        <Image
          src="/svg/heropage_stars.svg"
          width={1024}
          height={680}
          alt="Stars"
        ></Image>
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="font-dancing font-bold text-[22px] text-[#4A2E2B]">
            Friendship Day Special
          </div>
          <div className="font-dm text-[12px] font-semibold text-[#4A2E2B] leading-4 tracking-[-1%] my-4">
            A small gift that reminds them
            <br /> you're always there.
          </div>

          <button className="bg-[#4A2E2B] font-dm font-semibold text-[10.67px] text-white py-2 px-4.5 rounded-lg cursor-pointer my-2.5">
            Shop Now
          </button>
        </div>
        <div className="flex-1 ">{/* insert image here  */}</div>
      </div>
    </div>
  );
}

export default HeroSection;
