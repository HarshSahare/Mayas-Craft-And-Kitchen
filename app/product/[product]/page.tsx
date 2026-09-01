import BottomBar from "@/app/components/product/bottomBar";
import ProductDetails from "@/app/components/product/productDetails";
import ProductFeatures from "@/app/components/product/productFeatures";
import ProductGallery from "@/app/components/product/productGallery";
import { Products, ProductsType } from "@/app/lib/products";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    product: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { product } = await params;

  const [key] = product.split("-");

  const item = Products.find((p) => p.id === Number(key));

  if (!item) notFound();

  const link = process.env.NEXT_PUBLIC_WP_LINK;
  const base_url = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <main className="bg-background">
      <div className="mx-auto max-w-md py-4">
        <ProductGallery images={item.images} />

        <ProductDetails product={item} />

        <ProductFeatures />
      </div>

      <BottomBar
        price={item.price}
        originalPrice={item.oldPrice}
        buyLink={`${link}link: ${base_url}/product/${item.id}-${item.name.toLocaleLowerCase().split(" ").join("-")}%0AName: ${item.name}%0APrice: ${item.price}`}
      />
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  const { product } = await params;

  const [key] = product.split("-");

  const item: ProductsType | undefined = Products.find(
    (p) => p.id === Number(key),
  );

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
      canonical: `/products/${item.id}-${item.name}`,
    },
  };
}
