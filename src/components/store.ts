import { ProductType } from "./types";

export const saveItemsInLocalStorage = (cartItems: ProductType[]) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const updateLocalStorage = (cartItems: ProductType[]) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
