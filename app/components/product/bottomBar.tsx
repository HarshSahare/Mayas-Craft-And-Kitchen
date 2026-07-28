type Props = {
  price: number;
  originalPrice?: number;
};

export default function BottomBar({ price, originalPrice }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t font-dm bg-background backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between p-4">
        <div>
          <div className="flex gap-2">
            <span className="text-3xl font-bold">₹{price}</span>

            <span className="text-sm text-gray-400 line-through">
              ₹{originalPrice}
            </span>
          </div>
        </div>

        <button className="rounded-xl bg-[#5C3A31] px-10 py-3 font-medium text-white transition hover:bg-[#4B2F28]">
          Buy Now
        </button>
      </div>
    </div>
  );
}
