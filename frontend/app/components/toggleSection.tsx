"use client";

import { useState } from "react";
import CraftIcon from "./craftIcon";
import KitchenIcon from "./kitchenIcon";
import { useTheme } from "../provider/contexts/themeContext";
import "./toggleSection.scss";

export default function ToggleSection() {
  const { setTheme } = useTheme();

  return (
    <div className="flex font-dm text-[12px] font-medium overflow-hidden ">
      <button
        onClick={() => setTheme("craft")}
        className={`theme-toggle-button`}
      >
        <CraftIcon />
        <span>Craft</span>
      </button>

      <div className="w-0.5 h-3.5 my-auto bg-foreground mx-auto"></div>

      <button
        onClick={() => setTheme("kitchen")}
        className={`theme-toggle-button`}
      >
        <KitchenIcon />
        <span>Kitchen</span>
      </button>
    </div>
  );
}
