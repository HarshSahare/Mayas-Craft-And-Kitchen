import React from "react";
import UpperFooter from "./upperFooter";
import MiddleFooter from "./middleFooter";
import LowerFooter from "./lowerFooter";

function Footer() {
  return (
    <div className="bg-navbar text-foreground">
      <UpperFooter />
      <div className="my-7.5 w-full h-px bg-foreground"></div>
      <MiddleFooter />
      <div className="my-7.5 w-full h-px bg-foreground"></div>
      <LowerFooter />
    </div>
  );
}

export default Footer;
