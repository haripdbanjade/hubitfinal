import React from "react";
import Image from "next/image";
import { IoMail } from "react-icons/io5";

function InstructorCard({
  image,
  post,
  name,
  email,
  aboutMe,
  experience,
  skill,
}) {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row xxl:flex-row gap-14 ">
      <div
        className="shadow-xl shadow-gray-500 hover:scale-1 
    transition-all cursor-pointer duration-300 ease-linear  w-fit  
      pb-5 rounded-lg hover:opacity-80 "
      >
        <div className=" w-full lg:w-72 xl:w-72 xxl:w-72   borderRadiusTopHover ">
          <Image
            src={image}
            height={210}
            width={400}
            alt="Loading ..."
            // layout="fil"
            objectFit="cover"
            className="borderRadiusTop "
          />
        </div>
        <div className=" px-4  flex flex-col items-center justify-center h-20   ">
          <div className="Poppins capitalize text-gray-700 text-[18px]">
            {name}
          </div>
          <div className="text-gray-500 capitalize text-[14px]">{post}</div>
          <div className="text-gray-400 text-[13px] flex gap-1.5">
            <div>
              <IoMail className="w-5 h-5" />
            </div>
            <div>{email}</div>
          </div>
        </div>
      </div>
      <div className=" h-80 overflow-y-auto scroll">
        <div className="Poppins font-bold capitalize text-lg text-gray-800">
          about me
        </div>
        <div className="text-sm text-gray-500 text-justify">
          <p>{aboutMe}</p>
        </div>
        <div className="w-full h-[1px] bg-gray-300 my-4"></div>
        <div className="Poppins font-bold capitalize text-lg text-gray-800 ">
          skills
        </div>
        <div className="capitalize">{skill}</div>
        <div className="w-full h-[1px] bg-gray-300 my-4"></div>

        <div className="Poppins font-bold capitalize text-lg text-gray-800 ">
          experience
        </div>
        <div className="text-sm text-gray-500 text-justify">{experience}</div>
      </div>
    </div>
  );
}

export default InstructorCard;
