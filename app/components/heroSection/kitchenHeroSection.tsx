import Image from "next/image";
import Link from "next/link";
import React from "react";

function KitchenHeroSection() {
  return (
    <div
      className="overflow-hidden flex items-center py-15 isolate relative after:content-[''] after:absolute after:z-1 after:w-[120%] after:h-[20%]  after:bg-linear-to-b after:from-transparent  after:to-[#FFF8F4] after:bottom-0 after:left-0 "
      style={{
        background: "url('/images/kitchenHeroSection.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex py-2 flex-col flex-1">
        <div className="w-fit overflow-visible font-dancing text-[32px] text-[#4A2E2B] relative after:content-[''] after:absolute after:w-3 after:h-0.5 after:rotate-[-38deg] after:top-1/3 after:-right-3 after:bg-[#4A2E2B] before:content-[''] before:absolute before:w-2 before:h-0.5 before:rotate-[-20deg] before:top-1/3 before:-right-2.5 before:translate-y-1.5 before:bg-[#4A2E2B]">
          Delicious
        </div>
        <div className="font-dm w-fit relative text-[#4A2E2B] leading-7 overflow-visible">
          <span className="text-[36px] font-bold">Chocolate</span>
          <br />
          <span className="text-[34px] font-extrabold">Modak</span>
          <div className="absolute bottom-[-5] left-0 w-[70%] h-2">
            <Image
              fill
              src={"/svg/kitchenHeroSectionUnderline.svg"}
              alt="decoration"
            />
          </div>
          <div className="absolute bottom-[-12] left-0 w-[50%] h-2">
            <Image
              fill
              src={"/svg/kitchenHeroSectionUnderline.svg"}
              alt="decoration"
            />
          </div>
        </div>

        <Link
          href="/hamper"
          className="flex mt-8 z-3 items-center gap-2 bg-[#4A2E2B] w-fit font-dm font-semibold text-[10px] text-white py-2 px-4.5 rounded-lg cursor-pointer"
        >
          Order Now
          <Image
            src="/svg/double_right_array_solid.svg"
            width={10}
            height={10}
            alt="order now"
          ></Image>
        </Link>
      </div>
    </div>
  );
}

export default KitchenHeroSection;
