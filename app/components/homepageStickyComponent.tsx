"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../layout/navbar";
import SearchBar from "./searchBar";
import ToggleSection from "./toggleSection";

function HomepageStickyComponent({ children }: { children?: React.ReactNode }) {
  const [colors, setColors] = useState("bg-navbar");
  const threshold = 80;

  useEffect(() => {
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
      <Navbar className={colors} ignoreHomePageRule />
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
