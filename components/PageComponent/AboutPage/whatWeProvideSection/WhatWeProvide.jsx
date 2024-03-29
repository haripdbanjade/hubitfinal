import React from "react";
import { TbCertificate } from "react-icons/tb";
import CompanyProvide from "./CompanyProvide";

function WhatWeProvide() {
  const data = [
    {
      index:"1",
      icon: <TbCertificate />,
      title: "Top Courses",
      description: `Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & more), and personal development and productivity.`,
    },
    { 
      index:"2",
      icon: <TbCertificate />,
      title: "Certified Teachers",
      description: `Embark on excellence with Certified Instructors at HUB IT Training, guiding you through infrastructure intricacies and fostering mastery in teaching and problem-solving. Gain a holistic understanding of IT dynamics, from cybersecurity to collaborative teamwork. Access a curated solution library for seamless alignment with industry needs. Under our guidance, embrace continuous development, shaping into a future-ready IT professional.`,
    },
    {index:"3",
      icon: <TbCertificate />,
      title: "Book and Libraries",
      description: `Explore a wealth of knowledge in HUB IT's vast library, spanning IT training and solutions. Our curated resources cater to enthusiasts and professionals, offering a comprehensive guide. Delve into HUB IT infrastructure intricacies, effective teaching strategies, and cutting-edge innovations. With a commitment to continuous learning, our library positions HUB IT as a hub of excellence for those seeking to stay ahead in the dynamic IT landscape.`,
    },
  ];

  return (
    <div>
      <div className="py-5 text-center">
        <div className=" text-main capitalize Poppins font-bold">
          <h1 className="xxl:text-3xl text-2xl">What We Provide</h1>
        </div>
        <p className="w-9/12 mx-auto capitalize Poppins text-center my-3 text-sm xxl:text-base font-light text-gray-700  ">
        {/* At HUB IT, we offer a comprehensive suite of services encompassing 
        cutting-edge IT training, innovative solutions, and a collaborative community. Our goal is to empower individuals with the knowledge and tools needed for success in the ever-evolving landscape of technology. */}
        At HUB IT, we provide top-tier IT training, innovative solutions, and foster a collaborative community. Our mission is to empower individuals with the knowledge and tools for success in the dynamic tech landscape.
        </p>
      </div>
      <div className="w-10/12 mx-auto grid py-0 xl:grid-cols-3 xxl:grid-cols-3">
        {data?.map((val, i) => {
          return (
            <CompanyProvide
              key={i}
              index={val.index}
              title={val.title}
              description={val.description}
              icon={val.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WhatWeProvide;
