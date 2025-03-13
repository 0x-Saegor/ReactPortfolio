import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useTheme } from "../../utils/hooks";
import DefaultPicture from "../../assets/default_card.png";

const CarteProjetLabel = styled.span`
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  font-size: 18px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const CarteProjetTitle = styled.div`
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const CarteProjetImage = styled.img`
  height: 50%;
  width: 75%;
  align-self: center;
  border-radius: 5%;
`;

const CarteProjetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === "light" ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

function CarteProjet({ label, title, picture }) {
  const { theme } = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const star = isFavorite ? "⭐️" : "";

  return (
    <CarteProjetWrapper
      theme={theme}
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <CarteProjetTitle theme={theme}>{title}</CarteProjetTitle>
      <CarteProjetImage
        src={picture != null ? picture : DefaultPicture}
        alt="freelance"
      />
      <CarteProjetLabel theme={theme}>
        {star} {label} {star}
      </CarteProjetLabel>
    </CarteProjetWrapper>
  );
}

CarteProjet.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

CarteProjet.defaultProps = {
  label: "",
  title: "",
  picture: DefaultPicture,
};

export default CarteProjet;
