"use client";

import { useState } from "react";

const MAX_CHARACTERS = 500;

export default function CustomizationSection({
  customMessage,
  setCustomMessage,
}: {
  customMessage: string;
  setCustomMessage: (value: string) => void;
}) {
  return (
    <section className="mt-8 mb-4">
      <div className="mb-4">
        <h2 className="font-dm text-4 font-bold text-primary">
          <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-sm text-white">
            3
          </span>
          Add a Personal Touch
        </h2>

        <p className="pl-6 font-dm text-[12px] leading-6 text-neutral-500">
          Want to make your hamper even more meaningful? Leave a note for us and
          we'll personalize it with your message.
        </p>
      </div>

      <div className="rounded-3xl border border-primary/20 py-1 px-4 shadow-sm">
        <textarea
          id="gift-message"
          value={customMessage}
          maxLength={MAX_CHARACTERS}
          onChange={(e) => setCustomMessage(e.target.value)}
          placeholder="e.g. Change card message, preferred color theme, add a name tag, special wrapping, or any other request..."
          className="h-[calc(2*1.5rem+2rem)] w-full resize-none rounded-2xl bg-background p-4 font-dm text-[12px] text-primary placeholder:text-neutral-400 focus:border-primary focus:outline-none"
        />

        <div className="flex justify-end">
          <span className="font-dm text-[12px] text-neutral-500">
            {customMessage.length}/{MAX_CHARACTERS}
          </span>
        </div>
      </div>
      {customMessage && (
        <div className="text-red-500 font-dm text-xs text-center">
          Price may vary according to the customization
        </div>
      )}
    </section>
  );
}
