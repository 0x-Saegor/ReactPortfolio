import React, { useState } from "react";
import { Home, User, Heart, Image, Hammer } from "lucide-react";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="w-full flex justify-center fixed bottom-5">
      <div className="bg-gray-100 rounded-full py-3 px-6 flex items-center gap-6 shadow-md">
        <Link
          className={`cursor-pointer p-2 rounded-full ${
            activeIcon === "home"
              ? "bg-[" + colors.secondary + "] text-white"
              : "text-gray-900"
          }`}
          onClick={() => handleIconClick("home")}
          to="/"
        >
          <Home size={24} />
        </Link>

        <Link
          className={`cursor-pointer p-2 rounded-full ${
            activeIcon === "user"
              ? "bg-[" + colors.secondary + "] text-white"
              : "text-gray-900"
          }`}
          onClick={() => handleIconClick("user")}
          to="/about"
        >
          <User size={24} />
        </Link>

        <Link
          className={`cursor-pointer p-2 rounded-full ${
            activeIcon === "hammer"
              ? "bg-[" + colors.secondary + "] text-white"
              : "text-gray-900"
          }`}
          onClick={() => handleIconClick("hammer")}
          to="/projects"
        >
          <Hammer size={24} />
        </Link>

        <Link
          className={`cursor-pointer p-2 rounded-full ${
            activeIcon === "heart"
              ? "bg-[" + colors.secondary + "] text-white"
              : "text-gray-900"
          }`}
          onClick={() => handleIconClick("heart")}
        >
          <Heart size={24} />
        </Link>

        <Link
          className={`cursor-pointer p-2 rounded-full ${
            activeIcon === "image"
              ? "bg-[" + colors.secondary + "] text-white"
              : "text-gray-900"
          }`}
          onClick={() => handleIconClick("image")}
        >
          <Image size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
