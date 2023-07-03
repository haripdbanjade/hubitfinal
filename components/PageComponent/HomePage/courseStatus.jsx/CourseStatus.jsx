import React, { useState } from "react";
import { GiOpenBook } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
function CourseStatus() {
  const CourseStatus = [
    {
      color: "#A0047D",
      icon: <GiOpenBook />,
      counting: "50",
      status: "Running Course",
    },
    {
      color: "#1FA67A",
      icon: <GiOpenBook />,
      counting: "35",
      status: "Upcomming Course",
    },
    {
      color: "#5A5ECA",
      icon: <GiOpenBook />,
      counting: "85",
      status: "Total Course",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center px-10 md:px-40 py-4 md:py-10 Poppins">
      <div className="capitalize flex flex-col items-center h-fit ">
        <div className="p-2 rounded-full bg-main text-white text-2xl ">
          <GiOpenBook />
        </div>
        <h2>our course status</h2>
      </div>
      <div className="capitalize text-xs font-regular text-gray-600 px-0  md:px-60 text-center leading-6">
        <p>
          We have alot of IT Courses running in our HUB IT. Offer limited-time discounts or bonuses to create a sense of urgency.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 md:gap-16 mt-10  ">
        {CourseStatus.map((item, i) => {
          return (
            <div
              key={i}
              className="h-48 grid grid-rows-3  px-10 place-content-center place-items-center text-white rounded-xl"
              style={{ background: item.color }}
            >
              <div className=" ">
                <h1>{item.icon}</h1>
              </div>
              <div className=" ">
                <h1>{item.counting}</h1>
              </div>
              <div className=" flex items-center gap-2">
                <p>{item.status}</p>
                <BsArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseStatus;
