import styled from "styled-components";
import { menuColor } from "../../App/App.styled";

export const ProductWrapper = styled.div`
  border: 1px solid ${menuColor};
  color: ${menuColor};
  background: white;
  padding: 10px;
  text-align: center;
  min-height: 291px;
  border-radius: 5px;
  margin-bottom: 15px;

  .description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }

  button {
    padding: 10px 40px;
  }
  h3 {
    width: 225px;
  }
`;
