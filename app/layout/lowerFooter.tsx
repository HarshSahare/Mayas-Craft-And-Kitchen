import Link from "next/link";
import React from "react";

function LowerFooter() {
  return (
    <>
      <div className="text-center font-dm font-bold uppercase text-[10px]">
        Quick Links
      </div>
      <ul className="flex gap-5.5 w-fit my-3 font-medium text-[10px] mx-auto">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#craft">Craft</Link>
        </li>
        <li>
          <Link href="#about-us">About Us</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      <div className="mt-6 text-center font-dm font-bold uppercase text-[10px]">
        Categories
      </div>
      <ul className="flex gap-5.5 w-fit my-3 font-medium text-[10px] mx-auto">
        <li>
          <Link href="#">Custom Hampers</Link>
        </li>
        <li>
          <Link href="#craft">Birthday Gifts</Link>
        </li>
        <li>
          <Link href="#about-us">Anniversary Gifts</Link>
        </li>
        <li>
          <Link href="#contact">Shakes</Link>
        </li>
        <li>
          <Link href="#contact">Brownies</Link>
        </li>
      </ul>
      .
    </>
  );
}

export default LowerFooter;
