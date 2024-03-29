import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { IoPerson } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { toast, ToastContainer, toastify } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("Required!!!"),
  phone: yup
    .string()
    .min(10, "too short!!")
    .max(10, "too long!!")
    .required("Required!!"),
});
function CallSection() {
//   const FormFields=[{
//     name: "name",
//     type: "Text",
//     icon: <IoPerson/>,
//     placeholder: "fullname",
//   },
// {
//   name: "phone",
//   type: "Text",
//   icon: <BsTelephoneFill />,
//   placeholder: "phone no.",
// },]
  const postData = (val, resetForm) => {
    resetForm();
    toast.success("submitted successfully");
    try {
      axios.post("https://hubitbackend.onrender.com/quickcall", val);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full bg-[#EEEAEA] mt-7 lg:mt-14 xl:mt-14 xxl:mt-14 py-8 px-10  lg:py-24 xl:py-24 xxl:py-5 ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 place-items-center">
          <div className="text-center capitalize">
            <h2 className="h-fit text-left my-3  text-xl  xl:text-2xl xxl:text-2xl font-bold Poppins">
              {" "}
              let us give you a <span className="text-main">quick call</span>!
            </h2>
            <p className=" h-fit text-sm xl:text-sm xxl:text-base text-center font-normal text-gray-600">
              Leave us your contact number so our administratives can contact
              you as soon as possible.
            </p>
          </div>
          <Formik
            initialValues={{
              name: "",
              phone: "",
            }}
            validationSchema={schema}
            onSubmit={(val, { resetForm }) => {
              console.log(val);
              postData(val, resetForm);
              //toast.success("submitted successfully!!");
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col items-center ">
                  <div className="w-full  grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xxl:grid-cols-2 mx-10 ">
                    <div className="w-full flex items-start flex-col relative ">
                      <div>
                        <IoPerson className="text-xl absolute top-2 left-4 text-gray-400" />
                      </div>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full border-none py-2 pl-10 pr-3 rounded-2xl text-center placeholder:text-[14px] md:placeholder:text-base lg:placeholder:text-base xl:placeholder:text-base text-[14px] md:text-base lg:text-base xl:text-base"
                      />
                      <ErrorMessage
                        name="name"
                        component={"div"}
                        className="text-xs text-red-500"
                      />
                    </div>
                    <div className=" flex place-items-start  ">
                      <div className="relative">
                        <IoIosCall className="text-xl absolute top-2 left-2 text-gray-400" />
                        <Field
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          className="w-full border-none py-2 pl-8 pr-3 rounded-2xl text-center placeholder:text-[14px] md:placeholder:text-base lg:placeholder:text-base xl:placeholder:text-base text-[14px] md:text-base lg:text-base xl:text-base"
                        />
                        <ErrorMessage
                          name="phone"
                          component={"div"}
                          className="text-xs text-red-500"
                        />
                      </div>
                      <div className=" md:mx-[14rem] lg:mx-[14rem] xl:mx-[14rem] xxl:ml-3 flex items-center">
                        <ToastContainer />
                        <button type="submit" className="bg-main text-white font-bold text-[14px] md:text-base lg:text-base xl:text-base rounded-3xl px-10 py-2 w-fit ">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <div className=" md:mx-[14rem] lg:mx-[14rem] xl:mx-[14rem] xxl:mx-[14rem]    ">
                    <ToastContainer />
                    <button type="submit" className="bg-main text-white font-bold text-[14px] md:text-base lg:text-base xl:text-base rounded-3xl px-10 py-2  mt-5 w-fit ">
                      Submit
                    </button>
                  </div> */}
                </div>
              </Form>
            )}
            {/* {({handlesubmit})=>{
              <Form>
                {FormFields.map((val,i)=>{
                  return (
                    <div key={i}>
                      <Field 
                      name={val.name}
                      type={val.type}
                      icon={val.icon}
                      placeholder={val.placeholder}
                      />
                    </div>
                  )
                })};
               
              </Form>
            }}; */}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default CallSection;
