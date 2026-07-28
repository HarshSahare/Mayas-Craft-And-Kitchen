import { ProductsType } from "@/app/lib/products";

type Props = {
  product: ProductsType;
};

export default function ProductDetails({ product }: Props) {
  return (
    <section className="mt-6 font-dm">
      <div className="flex justify-between">
        <div>
          <div className="flex gap-1">
            <h2 className="text-[20px] font-bold">₹{product.price}</h2>

            <span className="text-gray-400 text-[11px] line-through mt-1">
              ₹200{product.oldPrice}
            </span>
          </div>
        </div>

        <div className="text-right text-sm text-gray-500">
          <div className="flex items-center justify-end text-[10px]">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="#FFB92D"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            {product.rating}
          </div>

          {/* <div className="flex justify-end gap-1">
            <Heart size={13} />
            {product.sold}+ Sold
          </div> */}
        </div>
      </div>

      <h1 className="text-[24px] font-bold">{product.name}</h1>

      <p className="text-[#8F8E8F]  text-[12px]">{product.description}</p>

      <div className="text-[#8F8E8F] mt-6">
        <h3 className="font-semibold">Highlights</h3>

        <ul className="mt-3 list-disc pl-5 text-gray-500">
          {product.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
