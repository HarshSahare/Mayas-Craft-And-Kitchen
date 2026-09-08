import Image from "next/image";
import React from "react";

function OfferBanner() {
  return (
    <div className="w-full my-4">
      <Image src="/images/combo_offer.png" width={1024} height={720} alt="offers" />
    </div>
  );
}

export default OfferBanner;
