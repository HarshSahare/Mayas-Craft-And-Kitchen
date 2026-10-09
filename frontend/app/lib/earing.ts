export type JewelryProductsType = {
  id: number;
  name: string;
  images: string[];
  description: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  sold?: number;
  inputs?: JewelryProductsInputType[];
  careInstructions?: string;
  productDetails?: string[];
};

export type JewelryProductsInputType = {
  title: string;
  options: JewelryProductsInputOptionType[];
};

export type JewelryProductsInputOptionType = {
  option: string;
  price?: number;
};

export const JewelryProducts: JewelryProductsType[] = [
  {
    id: 44,
    name: "Gold Oval Crystal Drop Earrings",
    images: [
      "/images/product_44_1.png",
      "/images/product_44_2.png",
      "/images/product_44_3.png",
      "/images/product_44_4.png",
      "/images/product_44_5.png",
    ],
    description:
      "Elegant gold-tone drop earrings featuring sparkling crystal-style studs, pearl accents and oval gold-tone pendants. Their vintage-inspired design adds a sophisticated touch to everyday and occasion wear.",
    price: 39,
    rating: 4.5,
    sold: 3,
    careInstructions:
      "Keep away from water, perfume and harsh chemicals. Wipe gently with a soft, dry cloth and store separately to protect the decorative stones and finish.",
    productDetails: [
      "Style: Oval drop earrings",
      "Color: Gold tone, silver and white",
      "Design: Oval pendants with crystal-style and pearl accents",
      "Finish: Polished metallic",
      "Occasion: Parties, outings and casual wear",
      "Quantity: 1 pair",
      "Material: Fashion jewelry alloy, imitation pearls and decorative stones",
    ],
  },
  {
    id: 45,
    name: "Rose Gold Crystal Circle Earrings",
    images: [
      "/images/product_45_1.png",
      "/images/product_45_2.png",
      "/images/product_45_3.png",
      "/images/product_45_4.png",
      "/images/product_45_5.png",
    ],
    description:
      "Stylish rose gold-tone earrings featuring sparkling crystal-style studs and circular openwork pendants decorated with shimmering stones. A versatile design for parties, celebrations and fashionable everyday outfits.",
    price: 39,
    rating: 4.3,
    sold: 2,
    careInstructions:
      "Avoid moisture, perfume and cosmetics. Clean with a soft cloth and store in a dry jewelry pouch to preserve the finish and decorative stones.",
    productDetails: [
      "Style: Circular drop earrings",
      "Color: Rose gold tone and silver",
      "Design: Crystal-style studs with circular stone detailing",
      "Finish: Polished metallic",
      "Occasion: Parties, celebrations and outings",
      "Quantity: 1 pair",
      "Material: Fashion jewelry alloy and decorative stones",
    ],
  },
  {
    id: 46,
    name: "Purple Bow Crystal Drop Earrings",
    images: [
      "/images/product_46_1.png",
      "/images/product_46_2.png",
      "/images/product_46_3.png",
      "/images/product_46_4.png",
      "/images/product_46_5.png",
    ],
    description:
      "Beautiful gold-tone drop earrings featuring purple bow-shaped accents, sparkling crystal-style details and pearl-like embellishments. Their playful yet elegant design makes them a lovely accessory for parties and special occasions.",
    price: 39,
    rating: 4.8,
    sold: 5,
    careInstructions:
      "Keep dry and avoid contact with perfume, lotions and cleaning products. Handle gently and store separately to protect the coloured finish and decorative details.",
    productDetails: [
      "Style: Decorative bow drop earrings",
      "Color: Purple, gold tone and white",
      "Design: Purple bows with crystal-style and pearl accents",
      "Finish: Gold-tone metallic",
      "Occasion: Parties, celebrations and gifting",
      "Quantity: 1 pair",
      "Material: Fashion jewelry alloy and decorative embellishments",
    ],
  },
  {
    id: 47,
    name: "Golden Daisy Flower Earrings",
    images: [
      "/images/product_47_1.png",
      "/images/product_47_2.png",
      "/images/product_47_3.png",
      "/images/product_47_4.png",
      "/images/product_47_5.png",
    ],
    description:
      "Cheerful golden-yellow daisy earrings featuring flower-shaped pendants, sparkling stud details and pearl-like centres. Their bright floral design adds a playful touch to casual outfits and everyday styling.",
    price: 39,
    rating: 4.6,
    sold: 4,
    careInstructions:
      "Avoid water, perfume and harsh chemicals. Wipe gently with a dry cloth and store in a separate jewelry compartment to protect the coloured petals.",
    productDetails: [
      "Style: Daisy flower drop earrings",
      "Color: Yellow, gold tone and silver",
      "Design: Daisy flowers with decorative centres",
      "Finish: Glossy coloured floral detailing",
      "Occasion: Casual wear, outings and gifting",
      "Quantity: 1 pair",
      "Material: Fashion jewelry alloy and coloured decorative elements",
    ],
  },
  {
    id: 48,
    name: "Crystal Teddy Bear Drop Earrings",
    images: [
      "/images/product_48_1.png",
      "/images/product_48_2.png",
      "/images/product_48_3.png",
      "/images/product_48_4.png",
      "/images/product_48_5.png",
    ],
    description:
      "Cute teddy bear drop earrings featuring sparkling crystal-style studs, pearl-like accents and adorable bear-shaped pendants with pink heart details. A charming accessory for casual looks and gifting.",
    price: 39,
    rating: 4.7,
    sold: 6,
    careInstructions:
      "Keep away from moisture, perfume and cosmetics. Clean gently with a soft, dry cloth and store carefully to protect the small decorative elements.",
    productDetails: [
      "Style: Teddy bear drop earrings",
      "Color: Silver tone, brown and pink",
      "Design: Bear-shaped pendants with heart details",
      "Finish: Decorative enamel-style detailing",
      "Occasion: Casual wear and gifting",
      "Quantity: 1 pair",
      "Material: Fashion jewelry alloy and decorative embellishments",
    ],
  },
  {
    id: 49,
    name: "Purple Flower Hook Earrings",
    images: [
      "/images/product_49_1.png",
      "/images/product_49_2.png",
      "/images/product_49_3.png",
      "/images/product_49_4.png",
      "/images/product_49_5.png",
    ],
    description:
      "Minimal and Colorful drop earrings featuring purple five-petal flower charms attached to delicate gold-tone hooks. Their floral design is ideal for relaxed everyday outfits and summer styling.",
    price: 39,
    rating: 4.4,
    sold: 2,
    careInstructions:
      "Avoid moisture, perfume and harsh chemicals. Wipe gently after use and store in a dry pouch to protect the purple finish.",
    productDetails: [
      "Style: Flower hook earrings",
      "Color: Purple and gold tone",
      "Design: Five-petal floral charms",
      "Finish: Coloured decorative petals with metallic edging",
      "Occasion: Daily wear, casual outings and gifting",
      "Quantity: 1 pair",
      "Material: Fashion jewelry alloy with coloured decorative finish",
    ],
  },
  {
    id: 50,
    name: "Black Geometric Crystal Earrings",
    images: [
      "/images/product_50_1.png",
      "/images/product_50_2.png",
      "/images/product_50_3.png",
      "/images/product_50_4.png",
      "/images/product_50_5.png",
    ],
    description:
      "Modern statement earrings featuring black geometric openwork pendants bordered with sparkling crystal-style stones and matching decorative studs. Their bold contrast creates an elegant look for evening outings and parties.",
    price: 39,
    rating: 4.5,
    sold: 3,
    careInstructions:
      "Keep away from water, perfume and abrasive cleaners. Wipe gently with a soft cloth and store separately to avoid scratches and damage to the decorative stones.",
    productDetails: [
      "Style: Geometric drop earrings",
      "Color: Black and silver tone",
      "Design: Open triangular pendants with crystal-style borders",
      "Finish: Glossy black and metallic detailing",
      "Occasion: Parties, dinners and evening wear",
      "Quantity: 1 pair",
      "Material: Fashion jewelry alloy and decorative stones",
    ],
  },
  {
    id: 51,
    name: "Strawberry Teddy Bear Earrings",
    images: [
      "/images/product_51_1.png",
      "/images/product_51_2.png",
      "/images/product_51_3.png",
      "/images/product_51_4.png",
      "/images/product_51_5.png",
    ],
    description:
      "Adorable teddy bear earrings featuring crystal-style studs, pearl-like accents and cute cream-coloured bear pendants holding red strawberries. Their playful design adds a sweet finishing touch to casual outfits.",
    price: 39,
    rating: 4.9,
    sold: 7,
    careInstructions:
      "Avoid water, perfume and direct contact with cosmetics. Clean carefully with a soft, dry cloth and store in a protective pouch.",
    productDetails: [
      "Style: Teddy bear drop earrings",
      "Color: Cream, red, green and gold tone",
      "Design: Bear-shaped pendants holding strawberries",
      "Finish: Colorful decorative detailing",
      "Occasion: Casual wear and gifting",
      "Quantity: 1 pair",
      "Material: Fashion jewelry alloy and coloured decorative elements",
    ],
  },
  {
    id: 52,
    name: "Pearl Ear Cuff Earrings",
    images: [
      "/images/product_52_1.png",
      "/images/product_52_2.png",
      "/images/product_52_3.png",
      "/images/product_52_4.png",
      "/images/product_52_5.png",
    ],
    description:
      "Elegant pearl ear cuff earrings featuring classic round pearl studs paired with a curved row of graduated pearls. The delicate design creates a graceful, contemporary look that complements both everyday outfits and special occasions.",
    price: 39,
    rating: 4.6,
    sold: 4,
    careInstructions:
      "Keep away from water, perfume and harsh chemicals. Wipe gently with a soft, dry cloth after use and store separately to protect the pearl finish.",
    productDetails: [
      "Style: Pearl ear cuff earrings",
      "Color: White pearl and gold tone",
      "Design: Round pearl studs with curved pearl detailing",
      "Finish: Pearl-effect with metallic accents",
      "Occasion: Daily wear, parties and special occasions",
      "Quantity: 1 pair",
      "Material: Fashion jewelry alloy and imitation pearls",
    ],
  },
];
