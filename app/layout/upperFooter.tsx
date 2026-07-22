import React from "react";
import Image from "next/image";

function UpperFooter() {
  return (
    <>
      <Image
        src="/images/navbar_logo.png"
        height={115}
        width={115}
        alt="Maya's Craft and Kitchen logo"
        className="mx-auto"
      />
      <div className="font-dm text-center text-foreground text-[16px] px-9 font-medium italic">
        “Handcrafted gifts and freshly made treats designed to make every
        celebration unforgettable “
      </div>
    </>
  );
}

export default UpperFooter;
