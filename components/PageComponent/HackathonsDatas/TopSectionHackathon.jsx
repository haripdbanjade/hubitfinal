<<<<<<< HEAD
import Image from "next/image";
import React from "react";
import image from "../../Resources/careerpic.jpg";
const TopSectionHackathon = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="relative z-10">
          <div className=" w-full h-80  bg-main ">
            <Image
              src={image}
              layout="fill"
              // objectfit="cover"
              // objectPosition={"center"}
              alt="Loading ..."
              className=" opacity-75  object-cover object-center"
            />
          </div>
          <div className="absolute top-32 sm:top-28   md:top-40 lg:top-40 xl:top-32 xxl:top-40 left-8 sm:left-20 text-white capitalize">
            <div className="font-bold text-xl md:text-3xl xl:text-3xl  xxl:text-3xl">
              Hackathons
            </div>
            <div className="Poppins text-xs md:text-sm xl:text-sm  xxl:text-sm mt-2">
              home/ Hackathons
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSectionHackathon;
=======
import Image from "next/image";
import React from "react";
import image from "../../Resources/careerpic.jpg";
const TopSectionHackathon = () => {
  return (
    <>
      {/* <div className="w-full h-full">
        <div className="relative z-10">
          <div className=" w-full h-80  bg-main ">
            <Image
              src={image}
              layout="fill"
              // objectfit="cover"
              // objectPosition={"center"}
              alt="Loading ..."
              className=" opacity-75  object-cover object-center"
            />
          </div>
          <div className="absolute top-32 sm:top-28   md:top-40 lg:top-40 xl:top-32 xxl:top-40 left-8 sm:left-20 text-white capitalize">
            <div className="font-bold text-xl md:text-3xl xl:text-3xl  xxl:text-3xl">
              Hackathons
            </div>
            <div className="Poppins text-xs md:text-sm xl:text-sm  xxl:text-sm mt-2">
              home/ Hackathons
            </div>
          </div>
        </div>
      </div> */}
      <div className='bg-[#FACC15] w-full relative h-36 sm:h-52 md:h-56 lg:h-60 xl:h-60 overflow-hidden'>
            <div className='w-10/12 mx-auto mt-6 sm:mt-10 md:mt-14 lg:mt-14 xl:mt-[3%]'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl capitalize my-0'>
                  Hackathons
                </h1>
                <p>
                  Home/Hackathons
                </p>
            </div>
            <div className='bg-white absolute -left-3 -bottom-20 w-[120%] h-28 sm:h-28 md:h-28 lg:h-32 xl:h-32 rotate-[5deg]'>
            </div>
        </div>
    </>
  );
};

export default TopSectionHackathon;
>>>>>>> a909855a8a48935018c4a4bc572233757ac96f4d
