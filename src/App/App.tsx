import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AppRoutes from "../routes/AppRoutes";
import { ProductType } from "../components/types";
import { getAllProducts } from "../services/apis";
import { updateLocalStorage } from "../components/store";
import { AppWrapper } from "./App.styled";

const App: React.FC = () => {
  // Retrieve the object from storage
  const retrievedItems = localStorage.getItem("cartItems") as string;
  const retrievedItemsArr = JSON.parse(retrievedItems);

  const [cartItems, setCartItems] = useState<ProductType[]>(retrievedItemsArr);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const addToCart = (product: ProductType) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems?.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item?.quantity || 0) + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    updateLocalStorage(cartItems);
  };

  const addOneMore = (id: number) => {
    setCartItems((prevItems) => {
      return prevItems?.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      );
    });
    updateLocalStorage(cartItems);
  };

  const removeOne = (id: number) => {
    setCartItems((prevItems) => {
      return prevItems
        ?.map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
            : item
        )
        .filter((item) => (item?.quantity ?? 0) > 0); // Remove items with zero quantity
    });
    updateLocalStorage(cartItems);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.products);
      } catch (error) {
        setError("Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <AppWrapper>
      <Router>
        <div className="app">
          <Header />
          <AppRoutes
            products={products}
            cartItems={cartItems}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
            onAddOneMore={addOneMore}
            onRemoveOne={removeOne}
          />
          <Footer />
        </div>
      </Router>
    </AppWrapper>
  );
};

export default App;
