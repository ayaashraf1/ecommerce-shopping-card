import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper } from "./Header.styled";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <header className="header">
        <h1>E-Commerce Store</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </HeaderWrapper>
  );
};

export default Header;
