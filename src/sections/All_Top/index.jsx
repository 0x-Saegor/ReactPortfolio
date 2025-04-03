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
      className="h-100 items-center flex flex-col text-center justify-center"
      style={{ backgroundColor: colors.bg_light_3 }}
    >
      <h1 className="font-bold text-4xl uppercase">{page_name}</h1>
      <div className="flex flex-row gap-x-3 text-gray-500 items-center">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon={faArrowRight} className=""/>
        <Link to={location.pathname}>{pageTitle}</Link>
      </div>
    </div>
  );
}

export default All_Top;
