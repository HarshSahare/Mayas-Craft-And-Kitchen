export const IncludedItemsData: IncludedItemDataType[] = [
  {
    id: 1,
    name: "Beautiful Ear Rings",
    image: "/images/hamper_earring.png",
    price: 40,
    quantity: 1,
  },
  {
    id: 2,
    name: "Ribbon Hair Clips",
    image: "/images/hamper_hair_clip.png",
    quantity: 1,
    price: 50,
  },
  {
    id: 3,
    name: "Multi-coloured Scrunchies",
    image: "/images/hamper_scrunchies.png",
    quantity: 1,
    price: 30,
  },
  {
    id: 4,
    name: "Classic Hair Claw clips",
    image: "/images/hamper_clutcher.png",
    quantity: 1,
    price: 50,
  },
  {
    id: 5,
    name: "Classic Gold Pendant Necklace",
    image: "/images/hamper_neckless.png",
    quantity: 1,
    price: 50,
  },
  {
    id: 6,
    name: "Classic Bracelet",
    image: "/images/hamper_bracelet.png",
    quantity: 1,
    price: 50,
  },
  {
    id: 7,
    name: "Stickers",
    image: "/images/bamper_sticker.jpeg",
    quantity: 1,
    price: 30,
  },
];

export type IncludedItemDataType = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export const AddOnItemsData = [
  {
    id: 1,
    name: "Custom Photo Frame",
    image: "/images/hamper_addons_1.png",
    price: 200,
    quantity: 0,
  },
  {
    id: 2,
    name: "Beautiful Mini Cards",
    image: "/images/hamper_addons_2.png",
    price: 50,
    quantity: 0,
  },
  {
    id: 3,
    name: "Lighting",
    image: "/images/hamper_addons_3.png",
    price: 50,
    quantity: 0,
  },
  {
    id: 4,
    name: "Chocolate",
    image: "/images/hamper_addons_4.png",
    price: 50,
    quantity: 0,
  },
];

export type AddOnItemsDataType = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};
