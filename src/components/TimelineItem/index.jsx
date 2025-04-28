// TimelineItem.jsx
import React from "react";
import clsx from "clsx";
import colors from "../../utils/style/colors";

const TimelineItem = ({ title, company, date, logo, points, side }) => {
  const isLeft = side === "left";

  return (
    <div className="grid grid-cols-1 md:grid-cols-9 items-start mb-8">
      {/* Left Side */}
      <div
        className={clsx("col-span-9 md:col-span-4", {
          "order-1 text-center md:text-right": isLeft,
          "order-3 text-center md:text-left": !isLeft,
        })}
      >
        <div
          className="text-white p-4 rounded-2xl shadow-lg"
          style={{ backgroundColor: colors.secondary }}
        >
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-300 italic mb-2">{company}</p>
          <ul
            className={clsx("text-sm", {
              "text-center md:pl-5 md:text-left": !isLeft,
              "text-center md:pr-5 md:text-right": isLeft,
            })}
          >
            {" "}
            {points.map((point, i) => (
              <li key={i} className={clsx("mb-1")}>
                {point}
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-100 mt-3">{date}</div>
        </div>
      </div>

      {/* Icon */}
      <div className="hidden md:flex col-span-1 justify-center relative order-2">
        <div className="bg-white p-2 rounded-full border-4 border-gray-800 shadow-md z-10 hidden md:block">
          <img src={logo} alt={company} className="w-10 h-10 object-contain" />
        </div>
      </div>

      {/* Right Side */}
      <div
        className={clsx("col-span-9 md:col-span-4", {
          "order-3": isLeft,
          "order-1": !isLeft,
        })}
      ></div>
    </div>
  );
};

export default TimelineItem;
