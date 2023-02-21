// import partners from "./icons/japan.jpg";

import Image from "next/image";
import ImageFirst from '../../../../public/images/shine resunga.png';
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
      <div className=" grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-6 my-4">
        {Placement.map((item,i) => {
          return (
            <div key={i} className=" flex justify-around w-full ">
            <div className=" w-40 h-10 ">
              <Image src={item.image} alt='' className=''/>
              </div>
              </div>
           
          );
        })}
      </div>
    </div>
  );
};
export default PlacementPartners;