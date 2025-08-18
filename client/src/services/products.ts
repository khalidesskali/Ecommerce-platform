import { getFeaturedProducts } from "../api/products";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
}

export const getAvailableFeaturedProducts = async (): Promise<Product[]> => {
  const response = await getFeaturedProducts();
  return response.data;
};
