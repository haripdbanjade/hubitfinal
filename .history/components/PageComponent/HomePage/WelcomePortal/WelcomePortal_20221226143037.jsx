import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Background from "../../../../public/images/portal.jpg";
import { BsPlayCircleFill } from "react-icons/bs";
function WelcomePortal({ images }) {
  return (
    <div>
      <div className="bg-[#f4f4f4] py-14 sm:py-10 xl:py-28 xxl:pt-28 xxl:pb-16 ">
        <div
          className="Poppins text-left xl:text-left xxl:text-left capitalize 
         py-0 xl:py-3 xxl:py-3 text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-2xl
         xxl:text-3xl w-11/12  mx-auto"
        >
          <h1 className="text-[2.5rem]">Welcome to our portal</h1>
        </div>
        <div
          className=" grid   lg:grid-cols-2 xl:grid-cols-2
          xxl:grid-cols-3  lg:gap-10 xl:gap-5 w-11/12 mx-auto xl:w-11/12 xxl:w-11/12 "
        >
          <div
            className="row-start-2 xl:col-span-1 xxl:col-span-2 lg:row-start-1 xl:row-start-1
           xxl:row-start-1 "
          >
            <div
              className="text-sm xl:text-base xxl:text-base text-slate-600 lg:py-4
             xl:py-5 xxl:py-5  sm:w-full sm:py-5 lg:w-full  xl:w-11/12 xxl:w-10/12 mx-auto
              xxl:mx-0 xl:mx-0 text-justify"
            >
              Lorem ipsum dolor sit amt consectetur adipisicing elit. Dolores
              quia rerum natus voluptate voluptates odit ducimus consectetur
              voluptatem obcaecati, eligendi itaque quasi delectus at officiis
              quas porro unde aperiam ipsa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolores quia rerum natus voluptate
              voluptates odit ducimus consectetur voluptatem obcaecati, eligendi
              itaque quasi delectus at officiis quas porro unde aperiam ipsa.
            </div>
            <div className="w-full  pt-2 sm:pt-0">
              <button
                className="hover:scale-105 transition-all
               ease-in-out duration-300 border-[1.5px]
                border-[#A0047D] rounded-2xl  px-2 
                py-[5px] text-[12px] text-main w-fit capitalize hover:bg-main hover:text-white "
              >
                learn more
              </button>
            </div>
          </div>
          <div
            className="   w-fit mx-auto sm:flex md:flex lg:flex xl:flex xxl:flex  gap-5 bg-gree-500
           sm:mx-auto md:mx-auto lg:auto xl:justify-end
            xxl:justify-end xl:mx-auto xxl:mx-auto py-5 sm:pt-8 sm:pb-2 xl:py-0 xxl:py-0
             xl:w-11/12 xxl:w-11/12 xl:-mt-12 xxl:-mt-32 "
          >
            <div className="   ">
              <div className="w-72  relative sm:w-72 lg:w-64 md:w-96 xl:w-80 xxl:w-72">
                <Image
                  src={Background}
                  alt={Background}
                  placeholder="blur"
                  blurDataURL={Background}
                  height={75}
                  width={50}
                  objectFit="cover"
                  objectPosition="right"
                  layout="responsive"
                  className="opacity-80"
                />
                <div className="absolute top-48 left-24 ">
                  <BsPlayCircleFill className="h-14 w-14 border-none text-white animate-ping duration-500 delay-100 transition-transform " />
                </div>
              </div>
            </div>
            <div
              className="flex  flex-col gap-7 lg:gap-9 my-8   lg:my-0 sm:my-0 md:my-0 xl:my-0
             xxl:my-0 xl:gap-8 xxl:gap-4 xl:flex-col xxl:flex-col "
            >
              {images.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="sm:w-60 hovr:scale-105 transition-all duration-300  cursor-pointer ease-in-out w-72 md:w-64 lg:w-40 xl:w-52
                   xxl:w-48"
                  >
                    <Image
                      src={val.image}
                      alt={"image"}
                      placeholder="blur"
                      blurDataURL={val.image}
                      height={38}
                      width={35}
                      objectFit="cover"
                      layout="responsive"
                      className=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePortal;