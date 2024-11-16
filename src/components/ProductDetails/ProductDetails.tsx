import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../types";
import { ProductDetailsWrapper } from "./ProductDetails.styled";
import StarRatings from "react-star-ratings";
import { getProductById } from "../../services/apis";
import { Loading } from "../shared/Loading";
import { ErrorMessage } from "../shared/ErrorMessage";

export const ProductDetails: React.FC<{ products: ProductType[] }> = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>();
  const { id } = useParams(); // Get the id from the URL
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const changeRating = (newRating: number) => {
    setRating(Math.round(newRating));
  };

  const setSelectedProductState = (data: ProductType) => {
    setSelectedProduct(data);
    changeRating(data.rating);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const product = await getProductById(id);
          setSelectedProductState(product);
        }
      } catch (error) {
        setError("Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error ?? ""} />;
  }

  return (
    <ProductDetailsWrapper>
      <img
        src={selectedProduct?.thumbnail}
        alt={selectedProduct?.title}
        width={300}
        height={300}
      />
      <div>
        <div>
          <h2>{selectedProduct?.title}</h2>
          <small>{selectedProduct?.brand}</small>
        </div>
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          starDimension="24px"
          starSpacing="2px"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
        />

        <p>{selectedProduct?.description}</p>
        <div className="price">${selectedProduct?.price.toFixed(2)}</div>
        <p>${selectedProduct?.warrantyInformation}</p>
        <p>${selectedProduct?.shippingInformation}</p>
        <button
          className="add-to-cart"
          onClick={() => console.log(`Added ${selectedProduct?.title} to cart`)}
        >
          Add to Cart
        </button>
      </div>
    </ProductDetailsWrapper>
  );
};
