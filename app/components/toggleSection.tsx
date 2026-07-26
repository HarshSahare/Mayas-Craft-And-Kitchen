"use client";

import { useState } from "react";
import CraftIcon from "./craftIcon";
import KitchenIcon from "./kitchenIcon";

export default function ToggleSection() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex font-dm text-[12px] font-medium overflow-hidden ">
      <button
        onClick={() => setCurrent(0)}
        className={`mx-auto relative flex items-center gap-1 py-2 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-[140%] after:h-2.5 after:-translate-x-1/2 after:translate-y-1/2 after:rounded-xl after:bg-[#E75F73] after:transition-all after:duration-300 after:ease-in-out ${current === 0 ? "after:opacity-100 after:scale-100" : "after:opacity-0 after:scale-0"}`}
        style={{
          color: current === 0 ? "#E75F73" : "var(--foreground)",
        }}
      >
        <CraftIcon active={current === 0} />
        <span>Craft</span>
      </button>

      <div className="w-0.5 bg-foreground mx-auto"></div>

      <button
        onClick={() => setCurrent(1)}
        className={`mx-auto relative flex items-center gap-1 py-2 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-[140%] after:h-2.5 after:-translate-x-1/2 after:translate-y-1/2 after:rounded-xl after:bg-[#E75F73] after:transition-all after:duration-300 after:ease-in-out ${current === 1 ? "after:opacity-100 after:scale-100" : "after:opacity-0 after:scale-0"}`}
        style={{
          color: current === 1 ? "#E75F73" : "var(--foreground)",
        }}
      >
        <KitchenIcon active={current === 1} />
        <span>Kitchen</span>
      </button>
    </div>
  );
}
