import { ProductsType } from "@/app/lib/products";
import Link from "next/link";

type Props = {
  price: number;
  originalPrice?: number;
  item: ProductsType;
  children?: React.ReactNode;
};

export default function BottomBar({
  price,
  originalPrice,
  item,
  children,
}: Props) {
  const link = process.env.NEXT_PUBLIC_WP_LINK;
  const base_url = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t font-dm bg-background backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between p-4">
        <div>
          <div className="flex gap-2">
            <span className="text-3xl font-bold">₹{price}</span>
            <span className="text-sm text-gray-400 line-through">
              ₹{originalPrice}
            </span>
            {children}
          </div>
        </div>

        <Link
          href={`${link}link: ${base_url}/product/${item.id}-${item.name.toLocaleLowerCase().split(" ").join("-")}%0AName: ${item.name}%0APrice: ${item.price}`}
          target="_blank"
          className="rounded-xl bg-[#5C3A31] px-10 py-3 font-medium text-white transition hover:bg-[#4B2F28]"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
