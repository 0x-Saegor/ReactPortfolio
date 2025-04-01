import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context/";
import { useContext } from "react";
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: Heebo, sans-serif;
    }
 
    body {
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? "#31313a" : colors.bg_light_1};
        margin: 0;  
    }
`;

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme == "dark"} />;
}

export default GlobalStyle;
