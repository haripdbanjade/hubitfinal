// import partners from "./icons/japan.jpg";

import Image from "next/image";
import ImageFirst from '../../../Resources/walmart.webp';
const PlacementPartners = () => {
  const Placement =[
    {
      image : ImageFirst
    }
  ]
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className=" px-4 md:px-8 lg:px-20 xl:px-24 xxl:px-32 mt-10 flex flex-col items-center ">
      <div className="w-max  text-[#a0047d] text-lg xl:text-xl xxl:text-2xl capitalize Poppins my-10 font-bold">
        Placement Partners
      </div>
      <div className="w-full grid  grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 xxl:grid-cols-5 gap-7 my-6">
        {Placement.map((item,i) => {
          return (
            <div key={i} className="w-max my-0 ml-44  flex items-center   h-fit">
            <div className=" ml-50  w-[677px] h-[52px] relative ">
              <Image src={item.image } alt='' className='' layout="fill"/>
              </div>
              </div>
            // <div
            //   key={item}
            //   className="flex flex-row h-max items-center w-full  py-1 px-2 border border-gray-500 shadow-md"
            // >
            //   <span className="text-base xl:text-lg xxl:text-xl">
            //     <SiMicrosoft />
            //   </span>
            //   <span className="ml-2 text-xs xl:text-sm xxl:text-base">
            //     Bright IT
            //   </span>
            // </div>
          );
        })}
      </div>
    </div>
  );
};
export default PlacementPartners;