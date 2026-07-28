"use client";

import { useEffect, useState } from "react";
import React from "react";
import "./mainLoader.css";
import Image from "next/image";

export default function MainLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // If the page has already loaded
    if (document.readyState === "complete") {
      setLoaded(true);
      return;
    }

    const handleLoad = () => {
      setLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {!loaded && (
        <div className="fixed inset-0 z-999999 flex items-center justify-center bg-background">
          <div className="flex flex-col items-center gap-8">
            <Image
              src="/images/navbar_logo.png"
              width={215}
              height={215}
              alt="Logo"
              className="h-32 w-auto object-contain"
            />
            <div className="relative h-1 w-80 overflow-hidden">
              <div className="loader-bar absolute h-full bg-black" />
            </div>
          </div>
        </div>
      )}

      {children}
    </>
  );
}
