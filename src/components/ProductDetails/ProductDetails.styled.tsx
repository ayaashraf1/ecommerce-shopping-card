import styled from "styled-components";
import { bgLightColor, textColor, textDarkColor } from "../../App/App.styled";

export const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border: 1px solid ${textDarkColor};
  border-radius: 10px;
  margin: 20px;
  background: ${bgLightColor};

  h2 {
    color: ${textDarkColor};
    margin-bottom: 0px;
  }

  p {
    color: ${textDarkColor};
  }

  .price {
    font-size: 1.5em;
    color: ${textColor};
  }

  button {
    padding: 10px 30px;
  }
`;
