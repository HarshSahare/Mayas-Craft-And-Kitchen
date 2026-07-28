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

  return (
    <main className="bg-background">
      <div className="mx-auto max-w-md px-4 py-4">
        <ProductGallery images={item.images} />

        <ProductDetails product={item} />

        <ProductFeatures />
      </div>

      <BottomBar price={item.price} originalPrice={20} />
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
