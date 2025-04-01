import React from "react";
import { Home, User, Heart, Image, Hammer } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import colors from "../../utils/style/colors";
import styled from "styled-components";

const Header = () => {
  const location = useLocation(); // Get the current route

  const CustomLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <StyledLink isActive={isActive} to={to}>
        {children}
      </StyledLink>
    );
  };

  const StyledLink = styled(Link)`
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 9999px;
    background-color: ${({ isActive }) =>
      isActive ? colors.secondary : "transparent"};
    color: ${({ isActive }) => (isActive ? "white" : "text-gray-900")};
    text-decoration: none;

    &:hover {
      opacity: 0.9;
    }
  `;

  return (
    <div className="w-full flex justify-center fixed bottom-5">
      <div className="bg-gray-100 rounded-full py-3 px-6 flex items-center gap-6 shadow-md">
        <CustomLink to="/">
          <Home size={24} />
        </CustomLink>

        <CustomLink to="/about">
          <User size={24} />
        </CustomLink>

        <CustomLink to="/projects">
          <Hammer size={24} />
        </CustomLink>

        <CustomLink to="/favorites">
          <Heart size={24} />
        </CustomLink>

        <CustomLink to="/gallery">
          <Image size={24} />
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
