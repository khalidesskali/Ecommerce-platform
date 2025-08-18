import axios from "axios";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
}

export const getProducts = () =>
  axios.get<Product[]>("http://localhost:3000/api/products");

export const getFeaturedProducts = () =>
  axios.get<Product[]>("http://localhost:3000/api/products/featured");
