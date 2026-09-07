import Image from "next/image";
import React from "react";

function Title() {
  return (
    <>
      <div className="text-[20px] font-extrabold font-dm">
        Get your favorite
      </div>
      <div className="relative w-fit">
        <span className="text-[24px] font-extrabold">Modak</span>
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
    </>
  );
}

export default Title;
