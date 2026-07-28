"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../layout/navbar";
import SearchBar from "./searchBar";
import ToggleSection from "./toggleSection";
import { usePathname } from "next/navigation";

function HomepageStickyComponent({
  children,
  ignoreHomePageRule = false,
}: {
  children?: React.ReactNode;
  ignoreHomePageRule?: boolean;
}) {
  const [colors, setColors] = useState(
    ignoreHomePageRule ? "bg-navbar" : "bg-background",
  );

  const pathname = usePathname();

  const isHomePage = pathname === "/" && !ignoreHomePageRule;

  if (isHomePage) {
    return <></>;
  }

  const threshold = 80;

  useEffect(() => {
    if (!ignoreHomePageRule) return;
    const handleScroll = () => {
      if (window.scrollY >= threshold) {
        setColors("bg-background");
      } else {
        setColors("bg-navbar");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar className={colors} />
      {children}
      <div
        className={
          colors +
          " sticky z-999 top-16 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.12)] transition-all duration-300"
        }
      >
        <SearchBar />
        <ToggleSection />
      </div>
    </>
  );
}

export default HomepageStickyComponent;
