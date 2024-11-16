import React, { useEffect } from "react";
import {
  CartWrapper,
  PoorScreen,
  QuantityWrapper,
  TotalWrapper,
} from "./Cart.styled";
import { Link } from "react-router-dom";
import { saveItemsInLocalStorage } from "../store";
import { CartProps } from "./types";

const Cart: React.FC<CartProps> = ({
  cartItems,
  onRemoveFromCart,
  onAddOneMore,
  onRemoveOne,
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item?.quantity || 1),
    0
  );

  useEffect(() => {
    saveItemsInLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <CartWrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <PoorScreen>
          <p>No items in cart</p>
        </PoorScreen>
      ) : (
        <>
          <ul>
            {cartItems?.map((item) => (
              <li key={item.id}>
                <img src={item.thumbnail} width={50} height={50} />
                <Link to={`/product/${item.id}`}>{item.title}</Link>
                <QuantityWrapper>
                  <button onClick={() => onAddOneMore(item.id)}>+</button>
                  {item.quantity}
                  <button onClick={() => onRemoveOne(item.id)}>-</button>
                </QuantityWrapper>
                ${item.price.toFixed(2)}
                <button onClick={() => onRemoveFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <TotalWrapper>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </TotalWrapper>
        </>
      )}
    </CartWrapper>
  );
};

export default Cart;
