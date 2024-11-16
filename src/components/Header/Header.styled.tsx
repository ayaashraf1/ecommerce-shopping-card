import styled from "styled-components";
import { bgColor, menuColor, textColor } from "../../App/App.styled";

export const HeaderWrapper = styled.div`
  background-color: ${bgColor};
  color: ${textColor};
  padding: 20px;
  text-align: center;

  nav ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline;
      margin: 0 15px;
      a {
        color: ${menuColor};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
