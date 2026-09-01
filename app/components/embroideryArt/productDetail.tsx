import { EmbroideryArtProductsType } from "@/app/lib/embroidery_art";

type Props = {
  product: EmbroideryArtProductsType;
};

export default function ProductDetails({ product }: Props) {
  return (
    <section className="mt-6 font-dm">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-bold">{product.name}</h1>
        <div className="flex items-center justify-end text-[12px] font-bold font-dm min-w-fit ">
          <svg
            width="20"
            height="13"
            viewBox="0 0 24 24"
            fill="#FFB92D"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          {product.rating} ({product.sold})
        </div>
      </div>

      <p className="text-[#8F8E8F] text-[16px]">{product.description}</p>
    </section>
  );
}
