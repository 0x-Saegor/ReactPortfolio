import React from "react";
import { Home, User, Heart, Image, Hammer } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import colors from "../../utils/style/colors";
import styled from "styled-components";

const StyledLink = styled(Link)`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${({ $isActive }) =>
    $isActive ? colors.secondary : "transparent"};
  color: ${({ $isActive }) => ($isActive ? "white" : "text-gray-900")};
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 0;
    padding: 0.5rem 0;
  }
`;

const Header = () => {
  const location = useLocation(); // Get the current route

  const CustomLink = ({ to, children, onClick }) => {
    const isActive = location.pathname === to;
    return (
      <StyledLink $isActive={isActive} to={to} onClick={onClick}>
        {children}
      </StyledLink>
    );
  };

  return (
    <HeaderContainer>
      <CustomLink
        to="/"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Home size={24} />
      </CustomLink>

      <CustomLink
        to="/about"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <User size={24} />
      </CustomLink>

      <CustomLink
        to="/projects"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Hammer size={24} />
      </CustomLink>
      {/* 
      <CustomLink to="/favorites">
        <Heart size={24} />
      </CustomLink>

      <CustomLink to="/gallery">
        <Image size={24} />
      </CustomLink> */}
    </HeaderContainer>
  );
};

export default Header;
