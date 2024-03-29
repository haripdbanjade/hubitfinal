import React from "react";
// import image from "../../../Resources/working_photo.png";
import Image from "next/image";
function TrainingAccomplished() {
  const dataa = [
    { name1: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxlZHVjYXRpb258ZW58MHx8MHx8fDA%3D", name: "Butwal Multiple Campus" },
    { name1: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxlZHVjYXRpb258ZW58MHx8MHx8fDA%3D", name: "Butwal Kalika Campus" },
    { name1: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxlZHVjYXRpb258ZW58MHx8MHx8fDA%3D", name: "Province 5 Pradesh Sabha" },
    { name1: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxlZHVjYXRpb258ZW58MHx8MHx8fDA%3D", name: "Lumbini city College" },
    { name1: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxlZHVjYXRpb258ZW58MHx8MHx8fDA%3D", name: "Lumbini Engineering College" },
  ];
  return (
    <div className="">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-6 sm:gap-8  w-full items-center  px-16 sm:px-4 md:px-12 my-4 md:my-8 lg:my-12 xl:my-16 ">
        {dataa.map((val, i) => {
          return (
            <div
              key={i}
              className="shadow-xl shadow-[#aeadad] cursor-pointer 
            hover:scale-105 transition-all ease-in-out duration-200 delay-75
             w-full"
            >
              <div className="w-full h-52"
              style={{
                backgroundImage: `url(${val.name1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              </div>
              <div className="mx-4 mt-4 border-b border-b-gray-300 ">
                <h1 className="capitalize text-sm">
                  UI/UX designing
                </h1>
              </div>
              <div className="flex items-center px-4 py-2 ">
                <div className="w-10 h-10 bg-blue-200 rounded-full" 
                style={{
                  backgroundImage: `url(${val.name1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                </div>
                <div className="w-10/12">
                  <h1 className="w-fit mx-0 my-0 ml-2 font-medium capitalize text-sm">
                    {val.name}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrainingAccomplished;
