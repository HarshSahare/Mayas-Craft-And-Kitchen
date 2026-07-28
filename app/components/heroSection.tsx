import Image from "next/image";
import Arrow from "@/public/svg/double_right_array_solid.svg";
import React from "react";

function HeroSection() {
  return (
    <div className="overflow-hidden relative after:content-[''] after:absolute after:z-[-2] after:w-[120%] after:h-full after:-translate-y-1/2 after:translate-x-[-10%] after:bg-[#FFC0CB] after:top-0 after:left-0 after:blur-lg before:content-[''] before:absolute before:z-[-2] before:w-[120%] before:h-[50%] before:translate-x-[-10%] before:bg-linear-to-b before:from-[#FFC0CB] before:to-background before:bg-to before:bottom-0 before:left-0 before:blur-[150px] ">
      <div className="-z-1 absolute inset-0 ">
        <Image src="/svg/heropage_stars.svg" fill alt="Stars"></Image>
      </div>
      <div className="flex">
        <div className="flex py-2 flex-col flex-1">
          <div className="font-dancing font-bold text-[50px] text-[#4A2E2B]">
            Custom
          </div>
          <div className="font-dm text-[27px] font-semibold text-[#4A2E2B] leading-4 tracking-[-1%] -mt-2 ">
            Gift Hampers
          </div>

          <button className="flex items-center gap-2 bg-[#4A2E2B] mt-auto w-fit font-dm font-semibold text-[10px] text-white py-2 px-4.5 rounded-lg cursor-pointer my-2.5">
            Create Your
            <Image
              src="/svg/double_right_array_solid.svg"
              width={10}
              height={10}
              alt="Hamper"
            ></Image>
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/images/friendship_day_hero_image.png"
            width={600}
            height={680}
            alt="Hamper"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
