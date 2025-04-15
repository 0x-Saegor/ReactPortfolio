// TimelineItem.jsx
import React from "react";
import clsx from "clsx";
import colors from "../../utils/style/colors";

const TimelineItem = ({ title, company, date, logo, points, side }) => {
  const isLeft = side === "left";

  return (
    <div className="grid grid-cols-9 items-start gap-4 mb-12">
      {/* Left Side */}
      <div
        className={clsx("col-span-4", {
          "order-1 text-right": isLeft,
          "order-3 text-left": !isLeft,
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
              "pl-5 list-disc text-left": !isLeft,
              "pr-5 text-right list-none": isLeft,
            })}
          >
            {points.map((point, i) => (
              <li
                key={i}
                className={clsx("mb-1", {
                  "relative pr-4": isLeft,
                })}
              >
                {isLeft && (
                  <span className="absolute right-0 top-1.5 w-1.5 h-1.5 bg-white rounded-full" />
                )}
                {point}
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-100 mt-3">{date}</div>
        </div>
      </div>

      {/* Icon */}
      <div className="col-span-1 flex justify-center relative order-2">
        <div className="bg-white p-2 rounded-full border-4 border-gray-800 shadow-md z-10">
          <img src={logo} alt={company} className="w-10 h-10 object-contain" />
        </div>
      </div>

      {/* Right Side */}
      <div
        className={clsx("col-span-4", {
          "order-3": isLeft,
          "order-1 text-right": !isLeft,
        })}
      ></div>
    </div>
  );
};

export default TimelineItem;
