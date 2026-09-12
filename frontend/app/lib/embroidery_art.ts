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
    id: 9,
    name: "Personalized Birthday Calendar Hoop",
    images: [
      "/images/product_9_1.png",
      "/images/product_9_2.png",
      "/images/product_9_3.png",
      "/images/product_9_4.png",
      "/images/product_9_5.png",
    ],
    price: 1800,
    rating: 4.8,
    sold: 14,
    description:
      "Celebrate a special birthday with a handcrafted embroidery hoop featuring a personalized date, name, and birthday message. A beautiful keepsake made to preserve a memorable moment forever.",
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
  {
    id: 10,
    name: "Couple Forever Personalized Wedding Hoop",
    images: [
      "/images/product_10_1.png",
      "/images/product_10_2.png",
      "/images/product_10_3.png",
      "/images/product_10_4.png",
      "/images/product_10_5.png",
    ],
    price: 1800,
    rating: 4.7,
    sold: 11,
    description:
      "A beautifully handcrafted embroidery portrait celebrating two people and their special bond. Personalized with names, anniversary or wedding date, and elegant floral details, making it a thoughtful keepsake for couples.",
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
  {
    id: 11,
    name: "Forever Together Heart Embroidery Hoop",
    images: [
      "/images/product_11_1.png",
      "/images/product_11_2.png",
      "/images/product_11_3.png",
      "/images/product_11_4.png",
      "/images/product_11_5.png",
    ],
    price: 1800,
    rating: 4.9,
    sold: 18,
    description:
      "A delicate heart-shaped embroidery design created to represent love, togetherness, and unforgettable memories. Its floral detailing gives the piece a soft, romantic look that makes it perfect for gifting someone special",
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
  {
    id: 12,
    name: "Couple Memories Personalized Birthday Hoop",
    images: [
      "/images/product_12_1.png",
      "/images/product_12_2.png",
      "/images/product_12_3.png",
      "/images/product_12_4.png",
      "/images/product_12_5.png",
    ],
    price: 1800,
    rating: 4.6,
    sold: 9,
    description:
      "Turn a special memory into a handcrafted piece of art. This personalized embroidery hoop combines a couple illustration, meaningful date, names, and floral details to create a unique birthday or anniversary keepsake.",
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
  {
    id: 13,
    name: "Couple Memories Personalized Birthday Hoop",
    images: [
      "/images/product_13_1.png",
      "/images/product_13_2.png",
      "/images/product_13_3.png",
      "/images/product_13_4.png",
      "/images/product_13_5.png",
    ],
    price: 1800,
    rating: 4.8,
    sold: 13,
    description:
      "Turn a special memory into a handcrafted piece of art. This personalized embroidery hoop combines a couple illustration, meaningful date, names, and floral details to create a unique birthday or anniversary keepsake.",
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
  {
    id: 14,
    name: "Personalized Birthday Celebration Hoop",
    images: [
      "/images/product_14_1.png",
      "/images/product_14_2.png",
      "/images/product_14_3.png",
      "/images/product_14_4.png",
      "/images/product_14_5.png",
    ],
    price: 1800,
    rating: 4.7,
    sold: 16,
    description:
      "A cheerful handcrafted embroidery hoop designed to celebrate a special birthday. Personalize it with a name, birthday message, or meaningful details to create a unique keepsake.",
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
  {
    id: 15,
    name: "Personalized Traditional Couple Calendar Hoop",
    images: [
      "/images/product_15_1.png",
      "/images/product_15_2.png",
      "/images/product_15_3.png",
      "/images/product_15_4.png",
      "/images/product_15_5.png",
    ],
    price: 1800,
    rating: 4.9,
    sold: 21,
    description:
      "A beautiful handcrafted embroidery featuring a traditional couple in elegant attire, surrounded by floral details and a personalized calendar. A meaningful way to preserve a special date forever.",
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
  {
    id: 16,
    name: "Birthday Cupcake Embroidery Hoop",
    images: [
      "/images/product_16_1.png",
      "/images/product_16_2.png",
      "/images/product_16_3.png",
      "/images/product_16_4.png",
      "/images/product_16_5.png",
    ],
    price: 1800,
    rating: 4.6,
    sold: 8,
    description:
      "A charming birthday-themed embroidery featuring a colorful cupcake design. A simple and playful keepsake that can be personalized with a name or special birthday message.",
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
  {
    id: 17,
    name: "Happy Birthday Couple Love Hoop",
    images: [
      "/images/product_17_1.png",
      "/images/product_17_2.png",
      "/images/product_17_3.png",
      "/images/product_17_4.png",
      "/images/product_17_5.png",
    ],
    price: 1800,
    rating: 4.8,
    sold: 15,
    description:
      "A romantic handcrafted embroidery celebrating love and togetherness. Featuring a heart design with a personalized birthday message, it makes a thoughtful gift for your partner.",
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
  {
    id: 18,
    name: "Personalized Anniversary Couple Hoop",
    images: [
      "/images/product_18_1.png",
      "/images/product_18_2.png",
      "/images/product_18_3.png",
      "/images/product_18_4.png",
      "/images/product_18_5.png",
    ],
    price: 1800,
    rating: 4.7,
    sold: 12,
    description:
      "A handcrafted couple embroidery designed to celebrate a special relationship and memorable date. Personalized names, anniversary dates, and floral details make it a truly personal keepsake.",
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
  {
    id: 19,
    name: "Traditional Couple Anniversary Calendar Hoop",
    images: [
      "/images/product_19_1.png",
      "/images/product_19_2.png",
      "/images/product_19_3.png",
      "/images/product_19_4.png",
      "/images/product_19_5.png",
    ],
    price: 1800,
    rating: 4.9,
    sold: 19,
    description:
      "A detailed handcrafted embroidery featuring a traditionally dressed couple with a personalized calendar. Designed to capture an important anniversary or wedding date in a beautiful keepsake.",
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
