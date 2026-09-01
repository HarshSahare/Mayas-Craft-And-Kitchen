import React from "react";
import { notFound } from "next/navigation";
import {
  EmbroideryArtProducts,
  EmbroideryArtProductsType,
} from "@/app/lib/embroidery_art";
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
  searchParams: Promise<{ inputs?: string }>;
};

async function page({ params, searchParams }: Props) {
  const { product } = await params;
  const { inputs } = await searchParams;

  const [key] = product.split("-");

  const item = EmbroideryArtProducts.find((p) => p.id === Number(key));

  if (!item) notFound();

  const selectedInputs =
    inputs ?? "1".repeat(item.inputs ? item.inputs.length : 0);
  const link = process.env.NEXT_PUBLIC_WP_LINK;
  const base_url = process.env.NEXT_PUBLIC_SITE_URL;

  let optionWpText = "";

  item.inputs?.map((input, index) => {
    const number_input = Number(selectedInputs.charAt(index)) - 1;

    if (number_input >= 0 && item.inputs && number_input < item.inputs?.length)
      optionWpText += `${input.title} : ${input.options[number_input].option} , *₹${input.options[number_input].price}*%0A`;
    else
      optionWpText += `${input.title} : ${input.options[0].option} , *₹${input.options[0].price}*%0A`;
  });

  return (
    <main className="bg-background">
      <div className="mx-auto max-w-md py-4">
        <ProductGallery images={item.images} />
        <ProductDetails product={item} />
        <OptionsSection inputs={item.inputs || []} />
        <WhyYoullLoveIt />
        <DropDownDetail
          productDetails={item.productDetails}
          careInstructions={item.careInstructions}
        />
      </div>

      <BottomBar
        price={
          item.inputs?.at(0)?.options.at(Number(selectedInputs.charAt(0)) - 1)
            ?.price || item.price
        }
        buyLink={`${link}link: ${base_url}/product/embrodiery-art/${item.id}-${item.name.toLocaleLowerCase().split(" ").join("-")}%0AName: ${item.name}%0A${optionWpText}`}
      />
    </main>
  );
}

export default page;

export async function generateMetadata({ params }: Props) {
  const { product } = await params;

  const [key] = product.split("-");

  const item: EmbroideryArtProductsType | undefined =
    EmbroideryArtProducts.find((p) => p.id === Number(key));

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
      canonical: `/products/embroidery-art/${item.id}-${item.name}`,
    },
  };
}
