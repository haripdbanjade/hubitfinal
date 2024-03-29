//import { data } from "autoprefixer";
import React from "react";
import { GiBinoculars } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { TbClipboardText } from "react-icons/tb";

function MIssionVision() {
  const data = [
    {
      color:"#F2C351",
      icon: <GiBinoculars />,
      title: "vision",
      description:
        "Hub IT aspires to lead global IT excellence by offering comprehensive training, innovative solutions, and fostering collaborative communities. Our mission is to empower individuals for a technology-driven future through cutting-edge education and support.",
    },
    {
      
      color:"#1FA67A",
      icon: <IoIosRocket />,
      title: "mission",
      description:
        "Hub IT is dedicated to equipping individuals with top-tier IT training and solutions, fostering a dynamic community of continuous learning.",
    },
    {
      color:'#5A5ECA',
      icon: <TbClipboardText />,
      title: "objectives",
      description:
        "Our aim is to propel learners into the forefront of technology, ensuring their expertise aligns seamlessly with industry demands and innovations.",
    },
  ];
  return (
    <div className="px-12 lg:px-20 xl:px-36 xxl:px-40">
      <div className="flex flex-col gap-12">
        <div className="">
          {data.map((val, i) => {
            return (
              <div key={i} className={`${i===1 ? "ml-0 md:ml-0 lg:ml-72 xl:ml-80 xxl:ml-96": "mr-0 md:mr-0 lg:mr-72 xl:mr-80 xxl:mr-96 "} flex capitalize my-20`}>
                <div className={`text-4xl h-fit p-5 mt-5 rotate-45 rounded-xl text-white`} style={{background:val.color,}}>
                  <div className="-rotate-45" >
                  {val.icon}
                  </div>
                </div>
                <div>
                  <h1 className="my-1 Poppins text-main text-xl">
                    {val.title}
                  </h1>
                  <div className="Poppins font-regular my-1 w-full  pl-5 text-xs xxl:text-sm text-gray-600 ">
                    <p className="">{val.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div>pics & videos</div> */}
      </div>
    </div>
  );
}

export default MIssionVision;
