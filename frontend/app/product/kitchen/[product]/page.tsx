import DropDownDetail from "@/frontend/app/components/kitchen/dropDownDetail";
import ProductDetails from "@/frontend/app/components/kitchen/productDetail";
import BottomBar from "@/frontend/app/components/product/bottomBar";
import ProductFeatures from "@/frontend/app/components/product/productFeatures";
import ProductGallery from "@/frontend/app/components/product/productGallery";
import { notFound } from "next/navigation";
import PriceBox from "../../../components/kitchen/priceBox";
import DeliveryBox from "@/frontend/app/components/kitchen/deliveryBox";
import {
  KitchenProducts,
  KitchenProductsType,
} from "@/frontend/app/lib/kitchen";
import ProductInfoCards from "@/frontend/app/components/kitchen/productInfoCards";
import { ModakProducts } from "@/frontend/app/lib/modak";

type Props = {
  params: Promise<{
    product: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { product } = await params;

  const [key] = product.split("-");

  const item =
    KitchenProducts.find((p) => p.id === Number(key)) ||
    ModakProducts.find((p) => p.id === Number(key));

  if (!item) notFound();

  const link = process.env.NEXT_PUBLIC_WP_LINK;
  const base_url = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <main className="bg-background">
      <div className="mx-auto max-w-md py-4">
        <ProductGallery images={item.images} showPreview={false} />
        <ProductInfoCards items={item.highlights} />
        <ProductDetails
          product={{
            name: item.name,
            description: item.description,
            rating: item.rating || 0,
            sold: item.sold || 0,
          }}
        />
        <PriceBox
          price={item.price}
          originalPrice={item.oldPrice}
          size={item.size}
        />

        <DeliveryBox />

        <DropDownDetail productDetails={item.productDetails} />
      </div>

      <BottomBar
        price={item.price}
        originalPrice={item.oldPrice}
        buyLink={`${link}link: ${base_url}/product/kitchen/${item.id}-${item.name.toLocaleLowerCase().split(" ").join("-")}%0AName: ${item.name}%0APrice: ${item.price}`}
      />
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  const { product } = await params;

  const [key] = product.split("-");

  const item: KitchenProductsType | undefined =
    KitchenProducts.find((p) => p.id === Number(key)) ||
    ModakProducts.find((p) => p.id === Number(key));

  console.log(item?.images[0]);

  if (!item) {
    return {};
  }

  return {
    title: item.name,
    description: item.description,

    openGraph: {
      title: item.name,
      description: item.description,
      images: item.images[0],
    },

    alternates: {
      canonical: `/products/kitchen/${item.id}-${item.name}`,
    },
  };
}
