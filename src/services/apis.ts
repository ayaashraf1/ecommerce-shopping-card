import { ProductType } from "../components/types";

export const getProductById = async (id: string): Promise<ProductType> => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; // Rethrow the error for further handling
  }
};

export const getAllProducts = async (): Promise<any> => {
  try {
    const response = await fetch(`https://dummyjson.com/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; // Rethrow the error for further handling
  }
};
