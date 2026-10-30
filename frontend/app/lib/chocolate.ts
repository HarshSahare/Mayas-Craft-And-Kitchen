export type ChocolateOption = {
  option: string;
  price: number;
};

export type ChocolateInput = {
  title: string;
  options: ChocolateOption[];
};

export type ChocolateProductsType = {
  id: number;
  name: string;
  images: string[];
  price: number;
  rating: number;
  sold: number;
  description: string;
  inputs: ChocolateInput[];
  careInstructions: string;
  productDetails: string[];
};

export const ChocolateProducts: ChocolateProductsType[] = [
  {
    id: 53,
    name: "Almond Chocolate",
    images: [
      "/images/product_53_1.png",
      "/images/product_53_2.png",
      "/images/product_53_3.png",
      "/images/product_53_4.png",
      "/images/product_53_5.png",
    ],
    price: 60,
    rating: 4.8,
    sold: 14,
    description:
      "Rich, smooth chocolate paired with crunchy almond pieces for a delicious balance of sweetness and nutty flavour. A simple, satisfying treat for chocolate and almond lovers.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 60 },
          { option: "8 Pieces", price: 110 },
        ],
      },
    ],
    careInstructions: `
      <p>Store in a cool, dry place away from direct sunlight.</p>
      <p className="mt-1">Keep away from heat to help prevent melting and preserve the chocolate's texture.</p>
    `,
    productDetails: [
      "Flavour: Chocolate & Almond",
      "Taste: Sweet, Rich & Nutty",
      "Texture: Smooth Chocolate with Crunchy Almonds",
      "Allergen note: Contains almonds; check the recipe for dairy and soy.",
      "Best for: Everyday Treats & Gifting",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 54,
    name: "Cashew Chocolate",
    images: [
      "/images/product_54_1.png",
      "/images/product_54_2.png",
      "/images/product_54_3.png",
      "/images/product_54_4.png",
      "/images/product_54_5.png",
    ],
    price: 60,
    rating: 4.8,
    sold: 12,
    description:
      "Creamy chocolate meets the mellow, buttery crunch of cashews. This nutty chocolate combination makes a delicious bite for sharing, treating yourself, or gifting.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 60 },
          { option: "8 Pieces", price: 110 },
        ],
      },
    ],
    careInstructions: `
      <p>Store in a cool, dry place away from direct sunlight.</p>
      <p className="mt-1">Keep away from heat and moisture to maintain the chocolate's texture.</p>
    `,
    productDetails: [
      "Flavour: Chocolate & Cashew",
      "Taste: Sweet, Creamy & Buttery",
      "Texture: Smooth Chocolate with Cashew Crunch",
      "Allergen note: Contains cashews; check the recipe for dairy and soy.",
      "Best for: Nut Lovers & Gifting",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 55,
    name: "Plain Chocolate",
    images: [
      "/images/product_55_1.png",
      "/images/product_55_2.png",
      "/images/product_55_3.png",
      "/images/product_55_4.png",
      "/images/product_55_5.png",
    ],
    price: 45,
    rating: 4.7,
    sold: 18,
    description:
      "Classic chocolate with a smooth finish and rich cocoa flavour. No added nut or fruit mix-ins—just a straightforward chocolate treat for anyone who loves the original.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 45 },
          { option: "8 Pieces", price: 80 },
        ],
      },
    ],
    careInstructions: `
      <p>Store in a cool, dry place away from direct sunlight.</p>
      <p className="mt-1">Avoid leaving the chocolate in a hot car or near a heat source, as it may melt.</p>
    `,
    productDetails: [
      "Flavour: Classic Chocolate",
      "Taste: Sweet & Cocoa-Rich",
      "Texture: Smooth",
      "Allergen note: Check the recipe for milk, soy, or other allergens.",
      "Best for: Everyday Chocolate Cravings",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 56,
    name: "Pistachio Kunafa Chocolate",
    images: [
      "/images/product_56_1.png",
      "/images/product_56_2.png",
      "/images/product_56_3.png",
      "/images/product_56_4.png",
      "/images/product_56_5.png",
    ],
    price: 80,
    rating: 4.9,
    sold: 16,
    description:
      "An indulgent chocolate inspired by the popular pistachio kunafa combination. Nutty pistachio flavour and crisp kunafa strands add a distinctive crunch to rich chocolate.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 80 },
          { option: "8 Pieces", price: 140 },
        ],
      },
    ],
    careInstructions: `
      <p>Store in a cool, dry place away from direct sunlight.</p>
      <p className="mt-1">Keep sealed and protect from moisture to help retain the kunafa's crisp texture.</p>
    `,
    productDetails: [
      "Flavour: Chocolate, Pistachio & Kunafa",
      "Taste: Rich, Sweet & Nutty",
      "Texture: Smooth with a Crispy Filling",
      "Allergen note: Contains pistachio and wheat if made with traditional kunafa; check the recipe for dairy and soy.",
      "Best for: Premium Treats & Gifting",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 57,
    name: "Rasmalai Chocolate",
    images: [
      "/images/product_57_1.png",
      "/images/product_57_2.png",
      "/images/product_57_3.png",
      "/images/product_57_4.png",
      "/images/product_57_5.png",
    ],
    price: 80,
    rating: 4.8,
    sold: 11,
    description:
      "A fusion treat inspired by rasmalai, bringing together chocolate and the familiar creamy, fragrant notes of the Indian dessert. A distinctive option for anyone who enjoys Indian-inspired sweets.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 80 },
          { option: "8 Pieces", price: 150 },
        ],
      },
    ],
    careInstructions: `
      <p>Keep in a cool place and follow the storage instructions supplied with the product.</p>
      <p className="mt-1">If the filling contains fresh or perishable dairy ingredients, refrigerate as directed and consume within the stated shelf life.</p>
    `,
    productDetails: [
      "Flavour: Rasmalai-Inspired Chocolate",
      "Taste: Sweet, Creamy & Aromatic",
      "Texture: Smooth with a Creamy Dessert-Inspired Centre",
      "Allergen note: May contain milk; check the actual recipe for nuts, soy, and other allergens.",
      "Best for: Indian Sweet Lovers & Festive Gifting",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 58,
    name: "Fruit and Nuts Chocolate",
    images: [
      "/images/product_58_1.png",
      "/images/product_58_2.png",
      "/images/product_58_3.png",
      "/images/product_58_4.png",
      "/images/product_58_5.png",
    ],
    price: 60,
    rating: 4.8,
    sold: 13,
    description:
      "A delicious mix of chocolate, fruity bites, and crunchy nuts. Sweet fruit and nutty pieces bring varied flavour and texture to every bite of this classic combination.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 60 },
          { option: "8 Pieces", price: 110 },
        ],
      },
    ],
    careInstructions: `
      <p>Store in a cool, dry place away from direct sunlight.</p>
      <p className="mt-1">Keep sealed between servings to help maintain freshness and texture.</p>
    `,
    productDetails: [
      "Flavour: Chocolate, Fruit & Nuts",
      "Taste: Sweet, Fruity & Nutty",
      "Texture: Smooth Chocolate with Mixed-In Crunch",
      "Allergen note: May contain nuts; check the actual fruit and chocolate ingredients for other allergens.",
      "Best for: Snacking, Sharing & Gifting",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 59,
    name: "Ferrero Rocher",
    images: [
      "/images/product_59_1.png",
      "/images/product_59_2.png",
      "/images/product_59_3.png",
      "/images/product_59_4.png",
      "/images/product_59_5.png",
    ],
    price: 100,
    rating: 4.9,
    sold: 20,
    description:
      "A chocolate-and-hazelnut-inspired treat with a rich chocolate taste and nutty crunch. A premium-feeling choice for celebrations, sharing, and gifting. Confirm whether this item is the branded confection or a house-made Ferrero-inspired chocolate before publishing.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 100 },
          { option: "8 Pieces", price: 195 },
        ],
      },
    ],
    careInstructions: `
      <p>Store in a cool, dry place away from direct sunlight.</p>
      <p className="mt-1">Keep away from heat to protect the chocolate coating and texture.</p>
    `,
    productDetails: [
      "Flavour: Chocolate & Hazelnut",
      "Taste: Rich, Sweet & Nutty",
      "Texture: Chocolate Coating with a Crunchy Nutty Bite",
      "Allergen note: Hazelnuts are commonly associated with this flavour; verify the actual product label for allergens.",
      "Best for: Celebrations & Premium Gifting",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 60,
    name: "Truffle Chocolate",
    images: [
      "/images/product_60_1.png",
      "/images/product_60_2.png",
      "/images/product_60_3.png",
      "/images/product_60_4.png",
      "/images/product_60_5.png",
    ],
    price: 100,
    rating: 4.9,
    sold: 22,
    description:
      "Rich, indulgent truffle-style chocolate with a deep cocoa flavour and a soft, creamy centre. An elegant treat for chocolate lovers, special occasions, and gift boxes.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 100 },
          { option: "8 Pieces", price: 195 },
        ],
      },
    ],
    careInstructions: `
      <p>Store according to the storage directions provided with the product.</p>
      <p className="mt-1">If made with fresh cream or another perishable filling, refrigerate as directed and observe the stated shelf life.</p>
    `,
    productDetails: [
      "Flavour: Chocolate Truffle",
      "Taste: Deep, Rich & Cocoa-Forward",
      "Texture: Soft, Smooth & Creamy",
      "Allergen note: Check the actual recipe for milk, soy, and other allergens.",
      "Best for: Dessert Lovers & Special-Occasion Gifting",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 61,
    name: "Chocolate Lollipop",
    images: [
      "/images/product_61_1.png",
      "/images/product_61_2.png",
      "/images/product_61_3.png",
      "/images/product_61_4.png",
      "/images/product_61_5.png",
    ],
    price: 80,
    rating: 4.7,
    sold: 17,
    description:
      "Fun chocolate lollipops served on sticks, combining a sweet chocolate taste with a playful presentation. Great for party favours, children's celebrations, return gifts, and dessert tables.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 80 },
          { option: "8 Pieces", price: 150 },
        ],
      },
    ],
    careInstructions: `
      <p>Store in a cool, dry place away from sunlight and heat.</p>
      <p className="mt-1">Handle by the stick where possible and keep the lollipops protected to avoid breakage or damage to decorations.</p>
    `,
    productDetails: [
      "Product type: Chocolate Lollipops",
      "Taste: Sweet & Chocolatey",
      "Texture: Firm, Smooth Chocolate",
      "Presentation: Mounted on sticks; designs may vary.",
      "Best for: Parties, Return Gifts & Celebrations",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 62,
    name: "Hazelnuts Chocolate",
    images: [
      "/images/product_62_1.png",
      "/images/product_62_2.png",
      "/images/product_62_3.png",
      "/images/product_62_4.png",
      "/images/product_62_5.png",
    ],
    price: 80,
    rating: 4.8,
    sold: 15,
    description:
      "Smooth chocolate paired with the roasted, nutty flavour of hazelnuts. The combination of rich chocolate and hazelnut crunch makes this a satisfying treat for fans of nut-filled chocolates.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 80 },
          { option: "8 Pieces", price: 150 },
        ],
      },
    ],
    careInstructions: `
      <p>Store in a cool, dry place away from direct sunlight.</p>
      <p className="mt-1">Keep sealed and away from heat to preserve the chocolate and nut texture.</p>
    `,
    productDetails: [
      "Flavour: Chocolate & Hazelnut",
      "Taste: Sweet, Rich & Roasted-Nutty",
      "Texture: Smooth Chocolate with Nutty Crunch",
      "Allergen note: Contains hazelnuts; check the recipe for dairy and soy.",
      "Best for: Hazelnut Lovers & Gifting",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 63,
    name: "Rose Chocolate",
    images: [
      "/images/product_63_1.png",
      "/images/product_63_2.png",
      "/images/product_63_3.png",
      "/images/product_63_4.png",
      "/images/product_63_5.png",
    ],
    price: 80,
    rating: 4.9,
    sold: 19,
    description:
      "A floral-inspired chocolate treat with a delicate rose note paired with sweet chocolate. Its elegant flavour makes it a thoughtful option for celebrations, festive hampers, anniversaries, and gifting.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 80 },
          { option: "8 Pieces", price: 150 },
        ],
      },
    ],
    careInstructions: `
      <p>Store in a cool, dry place away from direct sunlight.</p>
      <p className="mt-1">Keep away from heat and strong odours to help preserve the chocolate's flavour.</p>
    `,
    productDetails: [
      "Flavour: Rose-Inspired Chocolate",
      "Taste: Sweet with a Delicate Floral Note",
      "Texture: Smooth Chocolate",
      "Ingredients: Confirm the source of rose flavouring and any decorative ingredients.",
      "Best for: Festive Hampers, Anniversaries & Gifting",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 64,
    name: "Flavoured Chocolate",
    images: [
      "/images/product_64_1.png",
      "/images/product_64_2.png",
      "/images/product_64_3.png",
      "/images/product_64_4.png",
      "/images/product_64_5.png",
    ],
    price: 80,
    rating: 4.7,
    sold: 12,
    description:
      "A selection of flavoured chocolates for those who like to explore something beyond classic chocolate. Choose the available flavour from the options offered by Maya's Kitchen.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 80 },
          { option: "8 Pieces", price: 150 },
        ],
      },
    ],
    careInstructions: `
      <p>Store in a cool, dry place away from direct sunlight.</p>
      <p className="mt-1">Check the product label for flavour-specific ingredients and any special storage directions.</p>
    `,
    productDetails: [
      "Product type: Flavoured Chocolate",
      "Taste: Depends on the selected flavour",
      "Texture: Depends on the selected variety",
      "Ingredients: Confirm the available flavours and ingredients before publishing.",
      "Allergen note: Depends on the selected flavour and recipe.",
      "Best for: Trying New Flavours, Sharing & Gifting",
      "Available quantity: 4 or 8 pieces",
    ],
  },
  {
    id: 65,
    name: "Betel Leaves Chocolate",
    images: [
      "/images/product_65_1.png",
      "/images/product_65_2.png",
      "/images/product_65_3.png",
      "/images/product_65_4.png",
      "/images/product_65_5.png",
    ],
    price: 100,
    rating: 4.8,
    sold: 10,
    description:
      "A distinctive chocolate inspired by paan, pairing chocolate with the aromatic flavour associated with betel-leaf-based treats. A unique fusion option for those who enjoy traditional Indian after-meal flavours.",
    inputs: [
      {
        title: "Select Quantity",
        options: [
          { option: "4 Pieces", price: 100 },
          { option: "8 Pieces", price: 190 },
        ],
      },
    ],
    careInstructions: `
      <p>Store in a cool, dry place away from direct sunlight.</p>
      <p className="mt-1">Follow any additional storage instructions for the filling and consume within the stated shelf life.</p>
    `,
    productDetails: [
      "Flavour: Betel-Leaf / Paan-Inspired Chocolate",
      "Taste: Sweet, Aromatic & Distinctive",
      "Texture: Chocolate with a Flavourful Centre, depending on the recipe",
      "Ingredients: Confirm whether the recipe includes betel leaf, paan masala, nuts, or other fillings.",
      "Allergen note: Check the actual recipe and product label.",
      "Best for: Paan Lovers & Unique Gifting",
      "Available quantity: 4 or 8 pieces",
    ],
  },
];
