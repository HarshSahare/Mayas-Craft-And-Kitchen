"use client";

import { useState } from "react";

type TextTransform =
  | "normal"
  | "uppercase"
  | "lowercase"
  | "capitalize";

type TypographySectionProps = {
  name: string;
  initialSize: number;
  minSize: number;
  maxSize: number;
  initialWeight: number;
  lineHeight?: number;
  sample: string;
};

function TypographySection({
  name,
  initialSize,
  minSize,
  maxSize,
  initialWeight,
  lineHeight = 1.2,
  sample,
}: TypographySectionProps) {
  const [fontSize, setFontSize] = useState(initialSize);
  const [fontWeight, setFontWeight] = useState(initialWeight);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [transform, setTransform] =
    useState<TextTransform>("normal");

  const getTransform = () => {
    switch (transform) {
      case "uppercase":
        return "uppercase";
      case "lowercase":
        return "lowercase";
      case "capitalize":
        return "capitalize";
      default:
        return "none";
    }
  };

  return (
    <section className="mb-10 rounded-2xl border border-[#E8DED5] bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-[#2B211D]">
            {name}
          </h2>

          <p className="mt-1 text-xs text-[#95877F]">
            {fontSize}px · {fontWeight}
          </p>
        </div>

        <div className="rounded-lg bg-[#F8EFE5] px-3 py-2 text-center">
          <span className="text-lg font-semibold text-[#7A3E2B]">
            {fontSize}
          </span>

          <span className="ml-1 text-xs text-[#95877F]">
            px
          </span>
        </div>
      </div>

      {/* Preview */}
      <div className="mb-6 min-h-[110px] rounded-xl bg-[#FFF8EE] p-5">
        <p
          style={{
            fontSize: `${fontSize}px`,
            lineHeight,
            fontWeight,
            fontStyle: italic ? "italic" : "normal",
            textDecoration: underline ? "underline" : "none",
            textTransform: getTransform(),
          }}
          className="break-words text-[#2B211D]"
        >
          {sample}
        </p>
      </div>

      {/* Font Size */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-xs font-medium text-[#6F625B]">
            Font Size
          </label>

          <span className="text-xs text-[#95877F]">
            {fontSize}px
          </span>
        </div>

        <input
          type="range"
          min={minSize}
          max={maxSize}
          step={1}
          value={fontSize}
          onChange={(e) =>
            setFontSize(Number(e.target.value))
          }
          className="w-full accent-[#7A3E2B]"
        />

        <div className="mt-2 flex justify-between text-[11px] text-[#95877F]">
          <span>{minSize}px</span>
          <span>{maxSize}px</span>
        </div>
      </div>

      {/* Font Weight */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-xs font-medium text-[#6F625B]">
            Font Weight
          </label>

          <span className="text-xs text-[#7A3E2B]">
            {fontWeight}
          </span>
        </div>

        <input
          type="range"
          min={100}
          max={900}
          step={100}
          value={fontWeight}
          onChange={(e) =>
            setFontWeight(Number(e.target.value))
          }
          className="w-full accent-[#7A3E2B]"
        />

        <div className="mt-2 grid grid-cols-5 text-[10px] text-[#95877F]">
          <span>100</span>
          <span className="text-center">300</span>
          <span className="text-center">500</span>
          <span className="text-center">700</span>
          <span className="text-right">900</span>
        </div>

        {/* Weight labels */}
        <div className="mt-3 flex flex-wrap gap-2">
          {[400, 500, 600, 700, 800].map((weight) => (
            <button
              key={weight}
              onClick={() => setFontWeight(weight)}
              className={`rounded-lg border px-3 py-1.5 text-xs transition ${
                fontWeight === weight
                  ? "border-[#7A3E2B] bg-[#7A3E2B] text-white"
                  : "border-[#E8DED5] bg-white text-[#2B211D] hover:bg-[#F8EFE5]"
              }`}
            >
              {weight}
            </button>
          ))}
        </div>
      </div>

      {/* Style */}
      <div className="mb-6">
        <p className="mb-2 text-xs font-medium text-[#6F625B]">
          Style
        </p>

        <div className="flex flex-wrap gap-2">
          {/* Italic */}
          <button
            onClick={() => setItalic(!italic)}
            className={`rounded-lg border px-3 py-2 text-sm transition ${
              italic
                ? "border-[#7A3E2B] bg-[#7A3E2B] text-white"
                : "border-[#E8DED5] bg-white text-[#2B211D] hover:bg-[#F8EFE5]"
            }`}
          >
            <em>I</em>
          </button>

          {/* Underline */}
          <button
            onClick={() => setUnderline(!underline)}
            className={`rounded-lg border px-3 py-2 text-sm transition ${
              underline
                ? "border-[#7A3E2B] bg-[#7A3E2B] text-white"
                : "border-[#E8DED5] bg-white text-[#2B211D] hover:bg-[#F8EFE5]"
            }`}
          >
            <u>U</u>
          </button>
        </div>
      </div>

      {/* Text Transform */}
      <div>
        <p className="mb-2 text-xs font-medium text-[#6F625B]">
          Text Transform
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            {
              value: "normal",
              label: "Normal",
            },
            {
              value: "uppercase",
              label: "UPPERCASE",
            },
            {
              value: "lowercase",
              label: "lowercase",
            },
            {
              value: "capitalize",
              label: "First Words Capital",
            },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() =>
                setTransform(
                  option.value as TextTransform
                )
              }
              className={`rounded-lg border px-3 py-2 text-xs transition ${
                transform === option.value
                  ? "border-[#7A3E2B] bg-[#7A3E2B] text-white"
                  : "border-[#E8DED5] bg-white text-[#2B211D] hover:bg-[#F8EFE5]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TypographyTest() {
  return (
    <main className="min-h-screen bg-[#FFF8EE] px-4 py-10 text-[#2B211D]">
      <div className="mx-auto max-w-3xl">
        {/* Page Header */}
        <header className="mb-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#7A3E2B]">
            Maya's Kitchen & Craft
          </p>

          <h1 className="text-3xl font-semibold">
            Typography Playground
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#6F625B]">
            Adjust font size, weight, style, and text
            transformation to find the right typography system.
          </p>
        </header>

        {/* Display */}
        <TypographySection
          name="Display"
          initialSize={40}
          minSize={28}
          maxSize={64}
          initialWeight={600}
          lineHeight={1.1}
          sample="Handcrafted with love"
        />

        {/* H1 */}
        <TypographySection
          name="H1"
          initialSize={32}
          minSize={24}
          maxSize={52}
          initialWeight={600}
          lineHeight={1.2}
          sample="Discover Something Special"
        />

        {/* H2 */}
        <TypographySection
          name="H2"
          initialSize={28}
          minSize={22}
          maxSize={44}
          initialWeight={600}
          lineHeight={1.2}
          sample="Explore Our Collection"
        />

        {/* H3 */}
        <TypographySection
          name="H3"
          initialSize={24}
          minSize={20}
          maxSize={36}
          initialWeight={600}
          lineHeight={1.3}
          sample="Best Sellers"
        />

        {/* H4 */}
        <TypographySection
          name="H4"
          initialSize={20}
          minSize={18}
          maxSize={28}
          initialWeight={600}
          lineHeight={1.4}
          sample="Handmade Chocolate Collection"
        />

        {/* Product */}
        <TypographySection
          name="Product Title"
          initialSize={18}
          minSize={16}
          maxSize={24}
          initialWeight={600}
          lineHeight={1.4}
          sample="White Chocolate Cranberry"
        />

        {/* Body */}
        <TypographySection
          name="Body"
          initialSize={16}
          minSize={14}
          maxSize={20}
          initialWeight={400}
          lineHeight={1.5}
          sample="Carefully handcrafted using premium ingredients and thoughtful recipes, made especially for those little moments worth celebrating."
        />

        {/* Secondary */}
        <TypographySection
          name="Secondary"
          initialSize={14}
          minSize={12}
          maxSize={18}
          initialWeight={400}
          lineHeight={1.5}
          sample="Made fresh with carefully selected ingredients."
        />

        {/* Caption */}
        <TypographySection
          name="Caption"
          initialSize={12}
          minSize={10}
          maxSize={16}
          initialWeight={400}
          lineHeight={1.4}
          sample="Available for a limited time"
        />
      </div>
    </main>
  );
}
