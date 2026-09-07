export type KitchenProductsType = {
  id: number;
  name: string;
  images: string[];
  description: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  sold?: number;
  productDetails: string[];
  size: string;
  highlights: highlightsType[];
};

type highlightsType = {
  label: string;
  value: string;
};

export const KitchenProducts: KitchenProductsType[] = [
  {
    id: 20,
    name: "Chocolate Truffle",
    description:
      "A rich, creamy chocolate treat made for serious chocolate lovers. Soft chocolate cake, smooth chocolate cream and indulgent chocolate topping come together in every spoonful.",
    productDetails: [
      "Inside: Chocolate cake",
      "Taste: Rich, indulgent finish",
      "Texture: Chocolate crunch",
      "Best For: Chocolate lovers",
      "Storage: Keep refrigerated",
      "Allergens: Dairy, soy",
    ],
    highlights: [
      { label: "Eggless", value: "Yes" },
      { label: "Perfect For", value: "1–2 people" },
      { label: "Shelf Life", value: "3–4 days" },
      { label: "Freshness", value: "Made fresh to order" },
    ],
    images: [
      "/images/product_20_1.png",
      "/images/product_20_2.png",
      "/images/product_20_3.png",
      "/images/product_20_4.png",
      "/images/product_20_5.png",
    ],
    size: "200ml Glass Size",
    price: 100,
    oldPrice: 150,
    rating: 4.7,
    sold: 18,
  },
  {
    id: 21,
    name: "Oreo Crunch",
    description:
      "Creamy, chocolatey and irresistibly crunchy. Smooth cream layers meet crushed Oreo pieces and soft chocolate cake for a dessert that gives you a little crunch in every bite.",
    productDetails: [
      "Inside: Oreo & chocolate",
      "Taste: Sweet, creamy",
      "Texture: Cookie crunch",
      "Best For: Oreo lovers",
      "Storage: Keep refrigerated",
      "Allergens: Wheat, dairy, soy",
    ],
    highlights: [
      { label: "Eggless", value: "Yes" },
      { label: "Perfect For", value: "1–2 people" },
      { label: "Cookie Crunch", value: "Crushed Oreo" },
      { label: "Freshness", value: "Made fresh to order" },
    ],
    images: [
      "/images/product_21_1.png",
      "/images/product_21_2.png",
      "/images/product_21_3.png",
      "/images/product_21_4.png",
    ],
    size: "200ml Glass Size",
    price: 100,
    oldPrice: 150,
    rating: 4.8,
    sold: 24,
  },
  {
    id: 22,
    name: "Black Forest",
    description:
      "A classic chocolate-and-fruit combination in a convenient glass. Rich chocolate cake and creamy layers come together with fruity cherry notes and chocolate topping.",
    productDetails: [
      "Inside: Chocolate & cherry",
      "Taste: Rich, fruity",
      "Texture: Soft & creamy",
      "Best For: Classic cake lovers",
      "Storage: Keep refrigerated",
      "Allergens: Dairy, wheat",
    ],
    highlights: [
      { label: "Eggless", value: "Yes" },
      { label: "Perfect For", value: "1–2 people" },
      { label: "Fruit Twist", value: "Cherry flavour" },
      { label: "Freshness", value: "Made fresh to order" },
    ],
    images: [
      "/images/product_22_1.png",
      "/images/product_22_2.png",
      "/images/product_22_3.png",
      "/images/product_22_4.png",
      "/images/product_22_5.png",
    ],
    size: "200ml Glass Size",
    price: 100,
    oldPrice: 150,
    rating: 4.6,
    sold: 15,
  },
  {
    id: 23,
    name: "Strawberry Bliss",
    description:
      "Fresh, creamy and fruity. Sweet-tangy strawberry filling meets soft cake and smooth cream for a lighter alternative to rich chocolate desserts.",
    productDetails: [
      "Inside: Strawberry & cream",
      "Taste: Sweet, fruity",
      "Texture: Soft & juicy",
      "Best For: Fruit lovers",
      "Storage: Keep refrigerated",
      "Allergens: Dairy, wheat",
    ],
    highlights: [
      { label: "Eggless", value: "Yes" },
      { label: "Perfect For", value: "1–2 people" },
      { label: "Fruit", value: "Strawberry" },
      { label: "Freshness", value: "Made fresh to order" },
    ],
    images: [
      "/images/product_23_1.png",
      "/images/product_23_2.png",
      "/images/product_23_3.png",
      "/images/product_23_4.png",
      "/images/product_23_5.png",
    ],
    size: "200ml Glass Size",
    price: 100,
    oldPrice: 150,
    rating: 4.7,
    sold: 21,
  },
  {
    id: 24,
    name: "Black Currant",
    description:
      "Creamy, rich and beautifully tangy. Chocolate cake and smooth cream are balanced by a bold black currant filling and juicy berries.",
    productDetails: [
      "Inside: Black currant & chocolate",
      "Taste: Sweet-tangy berry",
      "Texture: Creamy & juicy",
      "Best For: Berry lovers",
      "Storage: Keep refrigerated",
      "Allergens: Dairy, wheat",
    ],
    highlights: [
      { label: "Eggless", value: "Yes" },
      { label: "Perfect For", value: "1–2 people" },
      { label: "Berry Twist", value: "Sweet-tangy" },
      { label: "Freshness", value: "Made fresh to order" },
    ],
    images: [
      "/images/product_24_1.png",
      "/images/product_24_2.png",
      "/images/product_24_3.png",
      "/images/product_24_4.png",
      "/images/product_24_5.png",
    ],
    size: "200ml Glass Size",
    price: 100,
    oldPrice: 150,
    rating: 4.9,
    sold: 31,
  },
  {
    id: 25,
    name: "Mix Fruit",
    description:
      "A colourful, refreshing dessert packed with fruity goodness. Creamy cake layers meet a mix of fruits, giving you sweetness, freshness and different textures in every spoonful.",
    productDetails: [
      "Inside: Mixed fruits & cream",
      "Taste: Sweet, refreshing",
      "Texture: Creamy & juicy",
      "Best For: Fruit lovers",
      "Fruit Mix: Seasonal variety",
      "Storage: Keep refrigerated",
    ],
    highlights: [
      { label: "Eggless", value: "Yes" },
      { label: "Perfect For", value: "1–2 people" },
      { label: "Fruit Mix", value: "Seasonal variety" },
      { label: "Freshness", value: "Made fresh to order" },
    ],
    images: [
      "/images/product_25_1.png",
      "/images/product_25_2.png",
      "/images/product_25_3.png",
      "/images/product_25_4.png",
      "/images/product_25_5.png",
    ],
    size: "200ml Glass Size",
    price: 100,
    oldPrice: 150,
    rating: 4.6,
    sold: 12,
  },
  {
    id: 26,
    name: "Pineapple Crush",
    description:
      "A creamy tropical treat with juicy pineapple in every layer. Soft cake and smooth cream are paired with sweet pineapple filling for a bright, refreshing finish.",
    productDetails: [
      "Inside: Pineapple & cream",
      "Taste: Sweet, tropical",
      "Texture: Creamy & juicy",
      "Best For: Pineapple lovers",
      "Storage: Keep refrigerated",
      "Allergens: Dairy, wheat",
    ],
    highlights: [
      { label: "Eggless", value: "Yes" },
      { label: "Perfect For", value: "1–2 people" },
      { label: "Tropical", value: "Juicy pineapple" },
      { label: "Freshness", value: "Made fresh to order" },
    ],
    images: [
      "/images/product_26_1.png",
      "/images/product_26_2.png",
      "/images/product_26_3.png",
      "/images/product_26_4.png",
      "/images/product_26_5.png",
    ],
    size: "200ml Glass Size",
    price: 100,
    oldPrice: 150,
    rating: 4.8,
    sold: 19,
  },
  {
    id: 27,
    name: "KitKat Chocolate",
    description:
      "Chocolate cake meets creamy chocolate layers and crunchy KitKat pieces. Soft, rich and crunchy textures come together for an indulgent chocolate experience.",
    productDetails: [
      "Inside: Chocolate & KitKat",
      "Taste: Rich, chocolatey",
      "Texture: Creamy & crunchy",
      "Best For: Chocolate lovers",
      "Storage: Keep refrigerated",
      "Allergens: Wheat, dairy, soy",
    ],
    highlights: [
      { label: "Eggless", value: "Yes" },
      { label: "Perfect For", value: "1–2 people" },
      { label: "Crunch", value: "KitKat pieces" },
      { label: "Freshness", value: "Made fresh to order" },
    ],
    images: [
      "/images/product_27_1.png",
      "/images/product_27_2.png",
      "/images/product_27_3.png",
      "/images/product_27_4.png",
      "/images/product_27_5.png",
    ],
    size: "200ml Glass Size",
    price: 100,
    oldPrice: 150,
    rating: 4.9,
    sold: 28,
  },
  {
    id: 28,
    name: "Butterscotch Bliss",
    description:
      "Creamy, caramel-like and delightfully crunchy. Smooth cream and soft cake are paired with sweet butterscotch pieces and a rich topping for a comforting dessert experience.",
    productDetails: [
      "Inside: Butterscotch & cream",
      "Taste: Sweet, caramel-like",
      "Texture: Creamy & crunchy",
      "Best For: Butterscotch lovers",
      "Storage: Keep refrigerated",
      "Allergens: Dairy, nuts",
    ],
    highlights: [
      { label: "Eggless", value: "Yes" },
      { label: "Perfect For", value: "1–2 people" },
      { label: "Crunch", value: "Butterscotch pieces" },
      { label: "Freshness", value: "Made fresh to order" },
    ],
    images: [
      "/images/product_28_1.png",
      "/images/product_28_2.png",
      "/images/product_28_3.png",
      "/images/product_28_4.png",
      "/images/product_28_5.png",
    ],
    size: "200ml Glass Size",
    price: 100,
    oldPrice: 150,
    rating: 4.7,
    sold: 16,
  },
  {
    id: 29,
    name: "Chocolate Hazelnut",
    description:
      "Rich chocolate with the unmistakable taste of roasted hazelnuts. Creamy chocolate layers are finished with crunchy hazelnut pieces for a deep, nutty and indulgent dessert.",
    productDetails: [
      "Inside: Chocolate & hazelnut",
      "Taste: Rich, nutty",
      "Texture: Creamy & crunchy",
      "Best For: Chocolate lovers",
      "Storage: Keep refrigerated",
      "Allergens: Hazelnut, dairy, soy",
    ],
    highlights: [
      { label: "Contains Nuts", value: "Hazelnut" },
      { label: "Perfect For", value: "1–2 people" },
      { label: "Nut Crunch", value: "Roasted hazelnut" },
      { label: "Freshness", value: "Made fresh to order" },
    ],
    images: [
      "/images/product_29_1.png",
      "/images/product_29_2.png",
      "/images/product_29_3.png",
      "/images/product_29_4.png",
      "/images/product_29_5.png",
    ],
    size: "200ml Glass Size",
    price: 100,
    oldPrice: 150,
    rating: 4.8,
    sold: 22,
  },
] as const;
