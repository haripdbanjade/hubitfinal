import React from "react";
import Image from "next/image";

function SuccessStudentCard({ image, placement, as, name, position }) {
  return (
    <div
      className="shadow-xl shadow-gray-400 hover:scale-105 transition-all 
    cursor-pointer duration-300 ease-linear w-full capitalize pb-5 rounded-md"
    >
      <div className="w-full">
        <Image
          src={image}
          height={185}
          width={290}
          alt="Loading ..."
          // layout="responsive"
          // objectFit="cover"
          // placeholder="blur"
          blurDataURL={image}
          className="borderRadiusTop"
        />
      </div>
      <div className="px-2 relative ">
        <div
          className="text-white text-[10px] bg-[#0468A0] capitalize  absolute  -top-3 
        rounded-sm px-1 py-1 w-fit"
        >
          {position}
        </div>
        <div className=" Poppins text-sm capitalize  pt-6">{placement}</div>
        <div className=" w-full h-0.5 bg-gray-100 my-3"></div>

        <div className=" Poppins text-[11px] flex justify-between">
          <div className="text-gray-600 text-xs">{name}</div>
          <div className="text-main text-xs">{as}</div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStudentCard;
