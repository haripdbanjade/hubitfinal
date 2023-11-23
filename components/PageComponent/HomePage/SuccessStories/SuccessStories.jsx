<<<<<<< HEAD
import React from "react";
import SuccessStudentCard from "./SuccessStudentCard";
function SuccessStories() {
  const successStudentCard = [
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
  ];
  return (
    <div className=" mt-16 lg:mt-16 xl:mt-16 xxl:my-16  px-24 lg:mb-14 xl:mb-14 xxl:mb-14">
      <div className="text-sm md:text-xl lg:text-2xl xl:text-2xl xxl:text-2xl text-center text-main Poppins">
        <h2 className="text-xl font-bold capitalize">
          some of our students success stories
        </h2>
      </div>
      <div
        className="grid grid-cols-1 gap-y-8 place-content-center place-items-center  md:grid-cols-2 md:gap-y-8
       lg:gap-y-8 xl:gap-y-0 xl:gap-x-28 xxl:gap-y-0 lg:grid-cols-3 xl:grid-cols-5 
       xxl:grid-cols-5 pt-16"
      >
        {successStudentCard.map((val, i) => {
          return (
            <div key={i}>
              <SuccessStudentCard
                image={val.image}
                position={val.position}
                placement={val.placement}
                name={val.name}
                as={val.as}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SuccessStories;
=======
import React from "react";
import SuccessStudentCard from "./SuccessStudentCard";
function SuccessStories() {
  const successStudentCard = [
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "Somu magar",
      as: "Pro. UI/UX Designer ",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "Gangeshwor Yadav",
      as: "Python",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "Amrit Hero",
      as: "Graphic",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web",
    },
  ];
  return (
    <div className=" mt-16 lg:mt-16 xl:mt-16 xxl:my-16  px-24 lg:mb-14 xl:mb-14 xxl:mb-14">
      <div className="text-sm md:text-xl lg:text-2xl xl:text-2xl xxl:text-2xl text-center text-main Poppins">
        <h2 className="text-xl font-bold capitalize">
          some of our students success stories
        </h2>
      </div>
      <div
        className="grid grid-cols-1 gap-y-8 place-content-center place-items-center  md:grid-cols-2 md:gap-y-8
       lg:gap-y-8 xl:gap-y-0 xl:gap-x-28 xxl:gap-y-0 lg:grid-cols-3 xl:grid-cols-5 
       xxl:grid-cols-5 pt-16"
      >
        {successStudentCard.map((val, i) => {
          return (
            <div key={i}>
              <SuccessStudentCard
                image={val.image}
                position={val.position}
                placement={val.placement}
                name={val.name}
                as={val.as}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SuccessStories;
>>>>>>> a909855a8a48935018c4a4bc572233757ac96f4d
