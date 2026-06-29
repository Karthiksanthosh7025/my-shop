export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Classic T-Shirt",
    price: 19.99,
    image: "/model1.jpg",
    description:
      "A soft, breathable cotton t-shirt designed for everyday comfort. Pre-shrunk and built to last.",
  },
  {
    id: "2",
    name: "Canvas Tote Bag",
    price: 14.99,
    image: "/model2.jpg",
    description:
      "A sturdy canvas tote, perfect for shopping, the beach, or daily errands. Holds more than it looks like it can.",
  },
  {
    id: "3",
    name: "Ceramic Mug",
    price: 9.99,
    image: "/model3.jpg",
    description:
      "A simple, sturdy ceramic mug for your morning coffee or tea. Microwave and dishwasher safe.",
  },
];