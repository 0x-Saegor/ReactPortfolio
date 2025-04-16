import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function All_Top({ page_name }) {
  const location = useLocation(); // Get the current route
  const pageTitle = capitalizeFirstLetter(location.pathname.split("/")[1]);

  return (
    <div
      className="h-100 flex flex-col items-center justify-center text-center px-4 sm:px-8"
      style={{ backgroundColor: colors.bg_light_3 }}
    >
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase">
        {page_name}
      </h1>
      <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-x-3 text-gray-500 items-center mt-4">
        <Link to="/" className="hover:text-gray-700">
          Home
        </Link>
        <FontAwesomeIcon icon={faArrowRight} className="hidden sm:inline" />
        <Link to={location.pathname} className="hover:text-gray-700">
          {pageTitle}
        </Link>
      </div>
    </div>
  );
}

export default All_Top;
