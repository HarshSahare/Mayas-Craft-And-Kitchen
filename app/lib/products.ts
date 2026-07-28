export type ProductsType = {
  id: number;
  name: string;
  images: string[];
  description: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  sold?: number;
  highlights: string[];
};

export const Products: ProductsType[] = [
  {
    id: 1,
    name: "Premium silicone friendship wrist band",
    images: ["/images/product_1_1.jpeg"],
    price: 120,
    rating: 2,
    description:
      "Made from premium-quality silicone, this friendship wrist band offers a comfortable fit and a stylish way to celebrate your special bond.",
    highlights: [
      "Premium soft silicone material",
      "Lightweight & comfortable",
      "Durable and waterproof",
      "Skin-friendly design",
    ],
  },
  {
    id: 2,
    name: "Beaded bracelet with heart shape charm",
    images: ["/images/product_2_1.jpeg"],
    price: 300,
    description:
      "Designed with colorful beads and a delicate heart-shaped charm, this bracelet adds a playful yet elegant touch to your everyday style",
    highlights: [
      "Premium beaded design",
      "Elegant heart-shaped charm",
      "Stretchable for a comfortable fit",
      "Lightweight & easy to wear",
      "Ideal for daily wear and gifting",
    ],
  },
  {
    id: 3,
    name: "101 reasons why I love you",
    images: ["/images/product_3_1.jpeg"],
    price: 249,
    description:
      "A heartfelt collection of 101 thoughtful reasons that express love and appreciation, making it a meaningful keepsake for your special someone.",
    highlights: [
      "Contains 101 heartfelt messages",
      "Beautifully designed keepsake",
      "Perfect for romantic occasions",
      "Compact and easy to gift",
      "A memorable way to express your love",
    ],
  },
] as const;
