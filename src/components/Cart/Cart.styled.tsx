import styled from "styled-components";
import {
  bgLightColor,
  menuColor,
  textColor,
  textDarkColor,
} from "../../App/App.styled";

export const PoorScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48vh;
  font-weight: bold;
  color: ${textDarkColor};
  background: ${bgLightColor};
  font-size: 20px;
`;

export const CartWrapper = styled.div`
  margin: 20px;

  h2 {
    margin-bottom: 10px;
    color: ${menuColor};
  }

  ul {
    list-style-type: none;
    padding: 0;
    color: ${textColor};

    li {
      padding: 13px 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      border-radius: 5px;
      background: ${bgLightColor};

      button {
        padding: 5px 15px;
      }

      &:hover {
        background: ${textDarkColor};
      }

      a {
        color: ${textColor};
      }
    }
  }
`;

export const QuantityWrapper = styled.div`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;

export const TotalWrapper = styled.div`
  padding: 13px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  border-radius: 5px;
  color: ${bgLightColor};
  background: ${textDarkColor};
`;
