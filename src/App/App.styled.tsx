import styled from "styled-components";

export const textColor = "#be8677";
export const menuColor = "#845e54";
export const bgColor = "#f9e0dc";
export const bgLightColor = "#f6eeed";
export const textDarkColor = "#413a3a";

export const AppWrapper = styled.div`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border: none;
    border-radius: 5px;
    background-color: ${textColor};
    color: ${bgLightColor};
    font-weight: bold;
    cursor: pointer;
    border: 1px solid ${textColor};

    &:hover {
      background-color: ${bgLightColor};
      color: ${textColor};
    }
  }
`;
