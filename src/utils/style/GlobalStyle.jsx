import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context/";
import { useContext } from "react";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: Helvetica, sans-serif;
    }
 
    body {
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? "#31313a" : "hsl(221, 41%, 95%)"};
        margin: 0;  
    }
`;

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme == "dark"} />;
}

export default GlobalStyle;
