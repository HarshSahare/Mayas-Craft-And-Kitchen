export type ProductsType = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  oldPrice?: number;
  review?: number;
  sold?: number;
};

export const Products: ProductsType[] = [
  {
    id: 1,
    name: "Premium silicone friendship wrist band",
    image: "/images/product_1_1.jpeg",
    price: 120,
    description: "Contain 10 pieces and colors available",
  },
  {
    id: 2,
    name: "Beaded bracelet with heart shape charm",
    image: "/images/product_2_1.jpeg",
    price: 300,
    description: "Contain 4 pieces and colors available",
  },
  {
    id: 3,
    name: "101 reasons why I love you",
    image: "/images/product_3_1.jpeg",
    price: 249,
    description: "No color option",
  },
];
