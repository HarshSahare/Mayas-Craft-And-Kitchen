"use client";

import Link from "next/link";

type Props = {
  total: number;
  originalTotal?: number;
  info?: string;
};

export default function BottomCheckout({ total, originalTotal, info }: Props) {
  const link = process.env.NEXT_PUBLIC_WP_LINK;
  const base_url = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-screen-md rounded-t-lg border-t border-neutral-200 bg-white shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-dm text-[20px] font-bold text-primary">
                ₹{total}
              </span>

              {originalTotal && originalTotal > total && (
                <span className="font-dm text-[12px] text-neutral-400 line-through">
                  ₹{originalTotal}
                </span>
              )}
            </div>
          </div>

          <Link
            href={`${link}link: ${base_url}/hamper%0A${info}`}
            target="_blank"
            className="rounded-full bg-primary px-4 py-2 font-dm text-[14px] font-semibold text-white transition hover:opacity-90 active:scale-95"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
