import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useTheme } from "../../utils/hooks";

const StyledLink = styled(Link)`
  padding: 15px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: white;
  border-radius: 15px;
  ${(props) => props.$isFullLink && ``}

  &:hover {
    background-color: ${colors.primary}; 
  }
`;

const CustomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.secondary};
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  margin-top: 1%;
  padding: 5px;
`;

const CustomTitle = styled.p`
  color: white;
  font-size: 2rem;
`;

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <CustomDiv>
      <CustomTitle className="px-2">Arthur</CustomTitle>
      <nav>
        <StyledLink to="/">
          Accueil
        </StyledLink>
        <StyledLink to="/about">
          À propos
        </StyledLink>
        <StyledLink to="/projects">
          Projets
        </StyledLink>
        <StyledLink to="/">
          Mon CV
        </StyledLink>
        <StyledLink onClick={() => toggleTheme()}>
          {theme == "light" ? "☀️" : "🌙"}
        </StyledLink>
      </nav>
    </CustomDiv>
  );
}

export default Header;
