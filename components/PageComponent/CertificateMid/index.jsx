import React from "react";

function CertificateMid() {
  return (
    <div className="  px-5 md:px-20 lg:px-20 xl:px-20 xxl:px-28 xxxl:px-20  pb-10">
      {" "}
      <div
      // className={`${
      //   references?.length > 500 ? "h-100  overflow-scroll" : "h-32 "
      // }`}
      >
        <div className="text-xl lg:text-2xl xl:text-3xl xxl:text-3xl capitalize font-medium text-mainColor ">
          check your certificate
        </div>
        <div className="font-normal text-[15px]  md:text-base lg:text-base xl:text-lg xxl:text-xl my-5 text-gray-500 xs:w-full sm:w-full md:w-full lg:w-[90vh] xl:w-[80vh] xxl:w-9/12 xxxl:w-10/12">
          {`HUB IT is recognized as one of Nepal's best global skill development
          and IT training centers. The journey of HUB IT started in 2017 with a
          big dream to bring applied education to the mass population at an
          affordable cost. The main purpose of HUB IT is to facilitate, with the
          best IT-related skills.`}
        </div>
        <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 xxl:w-[40%] xxxl:w-[40]">
          <input
            type="text"
            name="check"
            placeholder="Enter Registration Number"
            className="bg-white border-2 border-main rounded-3xl w-full px-3 py-2"
          />
        </div>
        <div className="flex justify-start md:w-6/12 w-full items-center">
          {" "}
          <button
            className="bg-main px-5 md:px-8 xl:px-8 xxl:px-8 xxxl:px-10  py-2 my-12 capitalize rounded-3xl text-white text-sm md:text-base lg:text-base xl:text-lg xxl:text-xl hover:scale-[1.04] transition-all
           ease-in-out delay-75 duration-300 hover:shadow-xl hover:shadow-gray-400  text-center"
          >
            check
          </button>
        </div>
      </div>
    </div>
  );
}

export default CertificateMid;
