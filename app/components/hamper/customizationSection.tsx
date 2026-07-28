"use client";

import { useState } from "react";

const MAX_CHARACTERS = 500;

export default function CustomizationSection() {
  const [message, setMessage] = useState("");

  return (
    <section className="mt-14">
      <div className="mb-4">
        <h2 className="font-dm text-[12px] font-bold text-primary">
          <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-sm text-white">
            3
          </span>
          Add a Personal Touch
        </h2>

        <p className="pl-6 font-dm text-[8px] leading-6 text-neutral-500">
          Want to make your hamper even more meaningful? Leave a note for us and
          we'll personalize it with your message.
        </p>
      </div>

      <div className="rounded-3xl border border-primary/20 py-1 px-4 shadow-sm">
        <textarea
          id="gift-message"
          value={message}
          maxLength={MAX_CHARACTERS}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="e.g. Change card message, preferred color theme, add a name tag, special wrapping, or any other request..."
          className="h-[calc(2*1.5rem+2rem)] w-full resize-none rounded-2xl bg-background p-4 font-dm text-[8px] text-primary placeholder:text-neutral-400 focus:border-primary focus:outline-none"
        />

        <div className="flex justify-end">
          <span className="font-dm text-[8px] text-neutral-500">
            {message.length}/{MAX_CHARACTERS}
          </span>
        </div>
      </div>
    </section>
  );
}
