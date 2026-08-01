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
    id: 8,
    name: "Golden Mini Friendship Hamper",
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
    highlights: [
      "Premium friendship gift hamper",
      "Soft satin scrunchie included",
      "Elegant bow earrings",
      "Personalized friendship bracelet",
      "Ready-to-gift premium packaging",
    ],
  },
  {
    id: 7,
    name: "Pearl Mini Friendship Hamper",
    images: [
      "/images/product_7_1.png",
      "/images/product_7_2.png",
      "/images/product_7_3.png",
      "/images/product_7_4.png",
      "/images/product_7_5.png",
    ],
    price: 149,
    oldPrice: 199,
    rating: 5,
    sold: 12,
    description:
      "A graceful friendship hamper featuring timeless pearl-inspired accessories and everyday essentials. Thoughtfully curated to express love, appreciation, and unforgettable memories with someone truly special.",
    highlights: [
      "Elegant pearl jewelry set",
      "Soft satin scrunchie",
      "Personalized friendship bracelet",
      "Stylish claw clip included",
      "Perfect for gifting",
    ],
  },
  {
    id: 6,
    name: "Sky Blue Mini Friendship Hamper",
    images: [
      "/images/product_6_1.png",
      "/images/product_6_2.png",
      "/images/product_6_3.png",
      "/images/product_6_4.png",
      "/images/product_6_5.png",
    ],
    price: 149,
    oldPrice: 199,
    rating: 4,
    sold: 4,
    description:
      "Brighten your friend's day with a charming hamper featuring pastel blue accessories and elegant jewelry. A thoughtful keepsake that celebrates your special bond with style and love.",
    highlights: [
      "Premium blue satin scrunchie",
      "Elegant pearl earrings",
      "Friendship name bracelet",
      "Trendy claw clip",
      "Beautiful gift-ready box",
    ],
  },
  {
    id: 5,
    name: "Violet Mini Friendship Hamper",
    images: [
      "/images/product_5_1.png",
      "/images/product_5_2.png",
      "/images/product_5_3.png",
      "/images/product_5_4.png",
      "/images/product_5_5.png",
    ],
    price: 149,
    oldPrice: 199,
    rating: 5,
    sold: 9,
    description:
      "Inspired by elegance, this royal-themed friendship hamper combines premium accessories with stylish jewelry to create a memorable gifting experience for your closest friend.",
    highlights: [
      "Luxurious satin scrunchie",
      "Stylish heart earrings",
      "Premium claw clip",
      "Personalized friendship bracelet",
      "Curated gift-ready presentation",
    ],
  },
  {
    id: 4,
    name: "Blue Mini Friendship Hamper",
    images: [
      "/images/product_4_1.png",
      "/images/product_4_2.png",
      "/images/product_4_3.png",
      "/images/product_4_4.png",
      "/images/product_4_5.png",
    ],
    price: 149,
    oldPrice: 199,
    rating: 4,
    sold: 7,
    description:
      "A sophisticated friendship gift set featuring premium accessories in a rich midnight blue theme. Thoughtfully assembled to celebrate meaningful friendships with a gift that's both stylish and memorable.",
    highlights: [
      "Premium satin scrunchie",
      "Elegant pearl earrings",
      "Crystal heart earrings",
      "Personalized friendship bracelet",
      "Premium gift box included",
    ],
  },
  {
    id: 3,
    name: "101 reasons why I love you",
    images: [
      "/images/product_3_1.jpeg",
      "/images/product_3_2.png",
      "/images/product_3_3.png",
      "/images/product_3_4.png",
      "/images/product_3_5.png",
    ],
    price: 249,
    rating: 5,
    sold: 20,
    oldPrice: 299,
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
  {
    id: 2,
    name: "4 pieces of Beaded bracelet with heart shape charm",
    images: [
      "/images/product_2_1.jpeg",
      "/images/product_2_2.png",
      "/images/product_2_3.png",
      "/images/product_2_4.png",
      "/images/product_2_5.png",
    ],
    price: 300,
    rating: 4,
    sold: 15,
    oldPrice: 400,
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
    id: 1,
    name: "Premium silicone friendship wrist band",
    images: [
      "/images/product_1_1.jpeg",
      "/images/product_1_2.png",
      "/images/product_1_3.png",
      "/images/product_1_4.png",
      "/images/product_1_5.png",
    ],
    price: 120,
    oldPrice: 180,
    rating: 3,
    sold: 7,
    description:
      "Made from premium-quality silicone, this friendship wrist band offers a comfortable fit and a stylish way to celebrate your special bond.",
    highlights: [
      "Premium soft silicone material",
      "Lightweight & comfortable",
      "Durable and waterproof",
      "Skin-friendly design",
    ],
  },
] as const;