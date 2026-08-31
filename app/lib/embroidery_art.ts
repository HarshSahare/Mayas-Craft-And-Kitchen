export type EmbroideryArtProductsType = {
  id: number;
  name: string;
  images: string[];
  description: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  sold?: number;
  inputs?: EmbroideryArtProductsInputType[];
  careInstructions?: string;
  productDetails?: string[];
};

export type EmbroideryArtProductsInputType = {
  title: string;
  options: EmbroideryArtProductsInputOptionType[];
};

export type EmbroideryArtProductsInputOptionType = {
  option: string;
  price?: number;
};

export const EmbroideryArtProducts: EmbroideryArtProductsType[] = [
  {
    id: 8,
    name: "Embroidery Art",
    images: [
      "/images/product_8_1.png",
      "/images/product_8_2.png",
      "/images/product_8_3.png",
      "/images/product_8_4.png",
      "/images/product_8_5.png",
    ],
    price: 149,
    oldPrice: 199,
    rating: 4,
    sold: 6,
    description:
      "Celebrate your friendship with a beautifully curated gift hamper featuring elegant accessories and thoughtful details. Designed to make every moment memorable, it's the perfect surprise for Friendship Day, birthdays, or simply to show how much you care.",
    inputs: [
      {
        title: "Select Size",
        options: [
          { option: "10 Inch", price: 1800 },
          { option: "13 Inch", price: 2500 },
        ],
      },
    ],
    careInstructions: `
      <p>Keep away from moisture and direct sunlight.</p>
      <p className="mt-1">Dust gently with a soft, dry cloth.</p>
      `,
    productDetails: [
      "Material: Cotton Fabric & Wooden Hoop",
      "Work: Hand Embroidery",
      "Size: 10 × 3 inches",
      "Colour: Multicolour",
      "Net Quantity: 1",
      "Handmade & Unique",
      "Suitable for: Home Decor & Gifting",
      "Occasion: Birthdays, Anniversaries, Wedding, Housewarming, Naming Ceremony & Special Occasions",
    ],
  },
];
