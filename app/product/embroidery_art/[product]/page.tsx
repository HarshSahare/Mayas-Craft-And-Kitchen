import React from "react";
import { notFound } from "next/navigation";
import { EmbroideryArtProducts } from "@/app/lib/embroidery_art";
import ProductGallery from "@/app/components/product/productGallery";
import BottomBar from "@/app/components/product/bottomBar";
import ProductDetails from "@/app/components/embroideryArt/productDetail";
import OptionsSection from "@/app/components/embroideryArt/optionsSection";
import WhyYoullLoveIt from "@/app/components/embroideryArt/WhyYoullLoveIt";
import DropDownDetail from "@/app/components/embroideryArt/dropDownDetail";

type Props = {
  params: Promise<{
    product: string;
  }>;
};

async function page({ params }: Props) {
  const { product } = await params;

  const [key] = product.split("-");

  const item = EmbroideryArtProducts.find((p) => p.id === Number(key));

  if (!item) notFound();

  return (
    <main className="bg-background">
      <div className="mx-auto max-w-md py-4">
        <ProductGallery images={item.images} />
        <ProductDetails product={item} />
        <OptionsSection inputs={item.inputs || []} />
        <WhyYoullLoveIt />
        <DropDownDetail />
      </div>

      <BottomBar
        price={item.price}
        originalPrice={item.oldPrice}
        item={{ ...item, highlights: [] }}
      />
    </main>
  );
}

export default page;
