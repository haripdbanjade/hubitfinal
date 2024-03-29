import PropTypes from "prop-types";
import React from "react";

function CompanyProvide({ icon, title, description }) {
  return (
    <div className={`transition-all duration-200 ease-linear hover:border-b-2  hover:border-b-main shadow-gray-200 xxl:px-12 px-16 pt-5 pb-16 `}>
      <div className="flex flex-col gap-5 items-center ">
        <div className="xxl:text-4xl text-3xl text-main border-4 rounded-full p-2">
          {" "}
          {icon}
        </div>
        <div className="w-full Poppins  text-center text-xl font-medium"> {title}</div>
      </div>
      <div className="Poppins xl:text-xs xxl:text-sm text-gray-500 font-regular leading-5 text-justify mt-5 scroll overflow-scroll">
        {" "}
        {description}
      </div>
    </div>
  );
}
CompanyProvide.prototypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
};
CompanyProvide.defaultProps = {
  title: "error",
  icon: "error",
  description: "error",
};

export default CompanyProvide;
