import { KitchenProductsType } from "./kitchen";

export const ModakProducts: KitchenProductsType[] = [
  {
    id: 21,
    name: "Golden Mini Friendship Hamper",
    images: [
      "/images/product_8_1.png",
      "/images/product_8_2.png",
      "/images/product_8_3.png",
      "/images/product_8_4.png",
      "/images/product_8_5.png",
    ],
    price: 50,
    oldPrice: 60,
    rating: 4,
    sold: 6,
    description:
      "Celebrate your friendship with a beautifully curated gift hamper featuring elegant accessories and thoughtful details. Designed to make every moment memorable, it's the perfect surprise for Friendship Day, birthdays, or simply to show how much you care.",
    productDetails: [
      "Premium friendship gift hamper",
      "Soft satin scrunchie included",
      "Elegant bow earrings",
      "Personalized friendship bracelet",
      "Ready-to-gift premium packaging",
    ],
    size: "200ml Glass Size",
    highlights: [
      {
        label: "Egg less",
        value: "Yes",
      },
      {
        label: "Perfect For",
        value: "1–2 People",
      },
      {
        label: "Shelf Life",
        value: "3–4 Days",
      },
      {
        label: "Freshness",
        value: "Made Fresh to Order",
      },
    ],
  },
] as const;
