import axios from "axios";

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(
    "http://localhost:3000/api/products/featured"
  );
  return response.data;
};
