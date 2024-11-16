import React from "react";
import { FooterWrapper } from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} E-Commerce Store. All rights
          reserved.
        </p>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;
