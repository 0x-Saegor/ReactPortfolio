import React from "react";
import { Home, User, Heart, Image, Hammer } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import colors from "../../utils/style/colors";

const Header = () => {
  const location = useLocation(); // Get the current route

  return (
    <div className="w-full flex justify-center fixed bottom-5">
      <div className="bg-gray-100 rounded-full py-3 px-6 flex items-center gap-6 shadow-md">
        <Link
          className={`cursor-pointer p-2 rounded-full ${
            location.pathname === "/"
              ? `bg-[${colors.secondary}] text-white`
              : "text-gray-900"
          }`}
          to="/"
        >
          <Home size={24} />
        </Link>

        <Link
          className={`cursor-pointer p-2 rounded-full ${
            location.pathname === "/about"
              ? `bg-[${colors.secondary}] text-white`
              : "text-gray-900"
          }`}
          to="/about"
        >
          <User size={24} />
        </Link>

        <Link
          className={`cursor-pointer p-2 rounded-full ${
            location.pathname === "/projects"
              ? `bg-[${colors.secondary}] text-white`
              : "text-gray-900"
          }`}
          to="/projects"
        >
          <Hammer size={24} />
        </Link>

        <Link
          className={`cursor-pointer p-2 rounded-full ${
            location.pathname === "/favorites"
              ? `bg-[${colors.secondary}] text-white`
              : "text-gray-900"
          }`}
          to="/"
        >
          <Heart size={24} />
        </Link>

        <Link
          className={`cursor-pointer p-2 rounded-full ${
            location.pathname === "/gallery"
              ? `bg-[${colors.secondary}] text-white`
              : "text-gray-900"
          }`}
          to="/"
        >
          <Image size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
