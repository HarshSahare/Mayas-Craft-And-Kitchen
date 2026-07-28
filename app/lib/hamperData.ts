export const IncludedItemsData = [
  {
    id: 1,
    name: "Beautiful Ear Rings",
    image: "/images/hamper_earring.png",
    price: 70,
    quantity: 1,
  },
  {
    id: 2,
    name: "Ribbon Hair Clips",
    image: "/images/hamper_hair_clip.png",
    quantity: 1,
    price: 70,
  },
  {
    id: 3,
    name: "Multicoloured Scrunchies",
    image: "/images/hamper_scrunchies.png",
    quantity: 1,
    price: 70,
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
    price: 80,
    quantity: 0,
  },
  {
    id: 2,
    name: "Beautiful Mini Cards",
    image: "/images/hamper_addons_2.png",
    price: 80,
    quantity: 0,
  },
  {
    id: 3,
    name: "Lighting",
    image: "/images/hamper_addons_3.png",
    price: 80,
    quantity: 0,
  },
  {
    id: 4,
    name: "Chocolate",
    image: "/images/hamper_addons_4.png",
    price: 80,
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
