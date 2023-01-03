import React from "react";
import image1 from "images/japan.jpg";
import OurTeamCard from "./OurTeamCard";
function OurTeamMembers() {
  const OurTeamMembersCard = [
    {
      image: image1,
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "full-stack developer",
    },
    {
      image: image1,
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "front-end developer",
    },
    {
      image: image1,
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
    {
      image: image1,
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
  ];
  return (
    <div className="my-28">
      <div>
        <div className="text-2xl text-center  text-main Poppins font-bold capitalize">
          our team members
        </div>

        <div className="text-sm  w-7/12  text-center mx-auto  mt-5 text-gray-400   capitalize">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          quisquam eius animi fugit consectetur maxime obcaecati necessitatibus
          excepturi commodi earum nisi itaque perspiciatis minus, quidem at
          magni possimus maiores nihil.
        </div>
      </div>
      <div
        className="grid grid-cols-1 gap-y-8  md:grid-cols-2 md:gap-y-8
       lg:gap-y-8 xl:gap-y-0 xxl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 
       xxl:grid-cols-4 px-14 pt-16"
      >
        {OurTeamMembersCard.map((val, i) => {
          return (
            <div key={i}>
              <OurTeamCard image={val.image} name={val.name} as={val.as} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeamMembers;
