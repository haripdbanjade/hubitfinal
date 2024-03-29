import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Icons from "../../components/Navigation/Navitem/iconitem";
import teacher from "../../public/teacher.png";
import Image from "next/image";
import Link from "next/link";
import {FaCrown, FaUserTie} from "react-icons/fa"
import {GiNetworkBars} from "react-icons/gi"

function Home() {
  const heading=[
    {h1:"graphic designing"},
    {h1:"Web designing"},
    {h1:"Computer Hardware"},
    {h1:"Mobile reapairing"},
    {h1:"Python"},
    {h1:"Java"},
    {h1:"Office packkage"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
    {h1:"Cyber security"},
  ]
  const iconsArray=[
    {h1:"become a professional",
     icon:<FaUserTie/> ,
     color:"text-professional" 
    },
    {h1:"master your skills",
     icon:<FaCrown/>  ,
     color:"text-crown" 
    },
    {h1:"Learn from developers",
     icon:<GiNetworkBars/> ,
     color:"text-level"  
    },
  ]
  return (
    <>
      <div className="w-full h-fit py-20 flex items-center justify-center bg-[#fafafa]">
      <div
        className="flex flex-col lg:flex-row xl:flex-row xxl:flex-row
          w-fit h-fit justify-center md:px-8 lg:px-20 xl:px-24 xxl:px-32 px-4 bg-[#fafafa]"
      >
        <div className="h-max md:w-5/6 mt-8 lg:w-3/6 xl:w-3/6 xxl:w-3/5 w-full ">
          <div className="flex mb-3 justify-between items-baseline">
            <div className="flex">
              {Icons.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="p-1 rounded-full bg-transparent flex justify-center items-center border border-[#A0047D] hover:border-none mr-2"
                  >
                    <span className="text-[#A0047D] cursor-pointer hover:scale-90 duration-300 delay-200 transition-all text-base xl:text-lg xxl:text-xl">
                      <Link href={icon.path} passHref>
                        <a target={"_blank"}>{icon.icon}</a>
                      </Link>
                    </span>
                  </div>
                );
              })}
            </div>
            {/* <div className="flex w-fit h-fit">
              {iconsArray.map((val,i)=>{
                  return <div key={i} className="flex items-baseline mx-2">
                    <div className={`${val.color} h-fit mx-1 text-lg md:text-xl lg:text-xl xl:text-2xl mb-0 pb-0`}>
                      {val.icon}
                    </div>
                    <h1 className={`${val.color} md:text-sm text-xs capitalize my-0 font-light`}>
                      {val.h1}
                    </h1>
                  </div>
                })}
            </div> */}
          </div>
          <div className="w-full flex flex-col font-bold xl:text-xl xxl:text-2xl text-[#A0047D] ">
            <h2>IT Training Institute in Nepal</h2>
          </div>
          <div className="text-xs xl:text-sm xxl:text-base text-gray-700 pr-6 text-justify">
            <p>
              HUB IT is recognized as one of Nepal’s best global skill
              development and IT training centers. The journey of HUB IT started
              in 2017 with a big dream to bring applied education to the mass
              population at an affordable cost. The main purpose of HUB IT is to
              facilitate, with the best IT-related skills.
            </p>
          </div>
          {/* <div className="flex py-8">
            <button
              className={
                "border-[1.5px] border-[#A0047D] rounded-full mr-6 px-2 text-sm xl:text-base xxl:text-lg text-main hover:scale-105 transition-all ease-in-out duration-300 delay-100 hover:bg-main hover:text-white"
              }
            >
              Explore More...
            </button>
            <div className="">
              <div className="flex gap-1 items-center border-[1.5px] border-main rounded-full py-1 hover:bg-main group">
                <div>
                  <AiFillPlayCircle className="text-3xl text-main ml-1 group-hover:scale-105 transition-all ease-in-out duration-300 delay-100 group-hover:text-white" />
                </div>
                <button className="text-main text-sm xl:text-base xxl:text-lg mr-1 group-hover:scale-105 transition-all ease-in-out duration-300 delay-100 group-hover:text-white">
                  watch now
                </button>
              </div>
            </div>
          </div> */}
          <div className="w-ful my-5 flex flex-wrap">
              {heading.map((val,i)=>{
                return <div key={i} className="mr-2 w-fit mb-2 rounded-3xl border-main border">
                  <p className="text-xs font-light px-2 py-[6px] capitalize w-fit  ">{val.h1}</p>
                </div>
              })}
          </div>
          <div className="flex w-full place-content-end  h-fit">
              {iconsArray.map((val,i)=>{
                  return <div key={i} className="flex items-baseline mx-2">
                    <div className={`${val.color} h-fit mx-1 text-lg md:text-xl lg:text-xl xl:text-2xl mb-0 pb-0`}>
                      {val.icon}
                    </div>
                    <h1 className={`${val.color} md:text-sm text-xs capitalize my-0 font-light`}>
                      {val.h1}
                    </h1>
                  </div>
                })}
            </div>
        </div>

        <div className="h-full w-full mt-8  md:mt-4 lg:mt-0 xl:mt-0 mx-auto lg:w-3/6 xl:w-3/6 xxl:w-2/5">
          <div className="relative">
            <div className="ml-[3vw]">
              <Image
                src={teacher}
                alt={"Loading"}
                layout="responsive"
                width={120}
                height={100}
              />
            </div>
            <div className="bg-white shadow-[0px_1px_10px_1px_black] h-max py-3 absolute top-[50%] left-[22%]  w-[200px] ">
              <div className="h-full w-full  relative">
                <div className=" h-full w-full flex flex-col justify-center px-4 ml-3">
                  <div className="text-[12px] font-bold text-[#a0047d] Poppins">
                    <h4 className="my-0">Featured Course</h4>
                  </div>
                  <div className="text-[10px] font-semibold text-black Poppins">
                    <p>
                    Become a Full Stack Developer with MERN Stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
