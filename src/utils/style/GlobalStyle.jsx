import { createGlobalStyle } from "styled-components";

// Les couleurs viennent des variables CSS de index.css (thème clair / sombre)
const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: Heebo, sans-serif;
    }

    body {
        margin: 0;
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
