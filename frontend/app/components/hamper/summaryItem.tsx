export default function SummaryItem({
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
}: {
  name: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-dm text-[15px] font-medium text-primary">{name}</h4>

        <p className="mt-1 font-dm text-xs text-neutral-500">₹{price} each</p>
      </div>

      <div className="flex items-center rounded-full border border-neutral-200 bg-background">
        <button
          onClick={onDecrease}
          className="flex h-9 w-9 items-center justify-center text-lg text-primary transition hover:bg-neutral-100"
        >
          −
        </button>

        <span className="min-w-[28px] text-center font-dm font-semibold text-primary">
          {quantity}
        </span>

        <button
          onClick={onIncrease}
          className="flex h-9 w-9 items-center justify-center text-lg text-primary transition hover:bg-neutral-100"
        >
          +
        </button>
      </div>
    </div>
  );
}
