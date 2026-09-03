"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../layout/navbar";
import SearchBar from "./searchBar";
import ToggleSection from "./toggleSection";

function HomepageStickyComponent({ children }: { children?: React.ReactNode }) {
  const [colors, setColors] = useState("navbar-background");
  const threshold = 80;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= threshold) {
        setColors("scroll-background");
      } else {
        setColors("navbar-background");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar-overlay"></div>
      <div className="navbar-overlay-2"></div>
      <Navbar className={colors} ignoreHomePageRule />
      <div className="*:relative *:z-996 relative after:absolute after:z-995 after:inset-0 after:opacity-0 after:transition-all after:duration-300 navbar-background">
        {children}
      </div>
      <div
        className={
          colors +
          " sticky *:relative *:z-1 top-16 z-996 after:absolute after:inset-0 after:z-0 after:opacity-100 after:transition-all after:duration-300 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.12)] transition-all duration-300"
        }
      >
        <SearchBar />
        <ToggleSection />
      </div>
    </>
  );
}

export default HomepageStickyComponent;
