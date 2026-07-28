"use client";

type Props = {
  total: number;
  originalTotal?: number;
  onCheckout?: () => void;
};

export default function BottomCheckout({
  total,
  originalTotal,
  onCheckout,
}: Props) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-screen-md rounded-t-lg border-t border-neutral-200 bg-white shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-dm text-[16px] font-bold text-primary">
                ₹{total}
              </span>

              {originalTotal && originalTotal > total && (
                <span className="font-dm text-[8px] text-neutral-400 line-through">
                  ₹{originalTotal}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={onCheckout}
            className="rounded-full bg-primary px-4 py-2 font-dm text-[10px] font-semibold text-white transition hover:opacity-90 active:scale-95"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
