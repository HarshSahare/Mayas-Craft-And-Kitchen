interface InfoItem {
  label: string;
  value: string;
}

interface ProductInfoCardsProps {
  items: InfoItem[];
}

const ProductInfoCards = ({ items }: ProductInfoCardsProps) => {
  return (
    <div className="flex w-full gap-3 overflow-x-auto font-dm py-1">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex min-w-max flex-col overflow-hidden rounded-[5px] text-[10px] border border-[#9B4B2B]"
        >
          <div className="whitespace-nowrap relative bg-[#8F4925] px-3 py-1 font-medium  text-[#FFF8F4]">
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

          <div className="whitespace-nowrap bg-[#FFF8F4] px-3 py-1  font-bold text-[#2F2F30]">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductInfoCards;
