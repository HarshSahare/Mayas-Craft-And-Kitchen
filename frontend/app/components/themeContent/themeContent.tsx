"use client";
import React from "react";
import { useTheme } from "../../provider/contexts/themeContext";
import CraftContent from "./craftContent";
import KitchenContent from "./kitchenContent";

function ThemeContent() {
  const { theme } = useTheme();

  return theme == "craft" ? <CraftContent /> : <KitchenContent />;
}

export default ThemeContent;
