interface InfoItem {
  label: string;
  value: string;
}

interface ProductInfoCardsProps {
  items: InfoItem[];
}

const ProductInfoCards = ({ items }: ProductInfoCardsProps) => {
  return (
    <div className="flex w-full gap-3 overflow-x-auto font-dm">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-1 min-w-max flex-col overflow-hidden rounded-[8px] text-[12px] border border-[#9B4B2B]"
        >
          <div className="relative bg-[#8F4925] px-2 py-1 font-medium  text-[#FFF8F4]">
            {item.label}
            <div className="h-2 w-3 absolute bottom-0 left-0 translate-y-[95%]">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 320 240"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 0
         L 320 0
         C 210 8, 55 80, 0 240
         Z"
                  fill="#8F4925"
                />
              </svg>
            </div>
          </div>

          <div className="whitespace-nowrap bg-[#FFF8F4] px-2 py-1  font-bold text-[#2F2F30]">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductInfoCards;
