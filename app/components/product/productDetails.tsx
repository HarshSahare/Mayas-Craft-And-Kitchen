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
              ₹{product.oldPrice}
            </span>
          </div>
        </div>

        <div className="text-right text-[10px] text-gray-500">
          <div className="flex items-center justify-end ">
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

          <div className="flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10px"
              height="10px"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="#F50426"
                d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
              />
            </svg>
            {product.sold}+ Sold
          </div>
        </div>
      </div>

      <h1 className="text-[24px] font-bold">{product.name}</h1>

      <p className="text-[#8F8E8F] text-[16px]">{product.description}</p>

      {product.highlights.length > 0 && (
        <div className="text-[#8F8E8F] text-[16px] mt-6">
          <h3 className="font-semibold">Highlights</h3>

          <ul className="mt-3 list-disc pl-5 text-gray-500">
            {product.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
