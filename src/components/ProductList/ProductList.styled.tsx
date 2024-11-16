import styled from "styled-components";
import { bgLightColor, textDarkColor } from "../../App/App.styled";

/* Style using FlexBox */
// export const ProductListWrapper = styled.div`
//   border-radius: 10px;
//   margin: 20px 40px;
//   padding: 20px 29px;
//   display: flex;
//      gap: 20px;
//      flex-wrap: wrap;
//      align-items: center;
//      justify-content: center;
//      background: ${bgLightColor};
//      flex-direction: column;
// }

//   @media (max-width: 450px) {
//     border-radius: unset;
//     margin:  0px;
//     padding: 0px;
//   }

//   h2 {
//     color: ${textDarkColor};
//     text-align: center;
//   }

//   #all-products {
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: space-around;
// `;

/* Style using Grid */
export const ProductListWrapper = styled.div`
  border-radius: 10px;
  margin: 20px 40px;
  padding: 20px 29px;
  display: grid;
  width: auto;

  @media (max-width: 450px) {
    border-radius: unset;
    margin: 0px;
    padding: 0px;
  }

  h2 {
    color: ${textDarkColor};
    text-align: center;
  }

  #all-products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    background: ${bgLightColor};
    justify-items: center;
    align-items: center;
    padding: 20px;

    /* Responsive adjustments */
    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 580px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
