import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import Layout from "../../HOC/Layout/Layout";
import Image from "next/image";
import bg from "../../public/images/Rectangle 35.png";
import * as Yup from "yup";
import { BiVial } from "react-icons/bi";
// import RulesAndRegulations from "../../components/PageComponent/RulesAndRegulations/RulesAndRegulations";
import NameOfCourseToEnroll from "../../components/PageComponent/NameOfCourseToEnroll/NameOfCourseToEnroll";
import axios from "axios";
function AdmissionForm() {
  const [course, setCourse] = useState([]);
  const [clickedCheckBox, setClickedCheckBox] = useState(false);
  const getCourse = () => {
    try {
      axios
        .get("https://hubitnep.herokuapp.com/course")
        .then((res) => {
          console.log(res);
          setCourse(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCourse();
  }, []);
  let courseName = [];
  {
    course.map((val, i) => {
      courseName.push({ id: val.id, course_name: val.course_name });
      return <div key={i}>{val.course_name}</div>;
    });
  }

  const admissionForm = [
    {
      label: "full name:",
      type: "text",
      apikey: "full_name",
      placeholder: " Enter your full name",
    },
    {
      label: "address:",
      type: "text",
      apikey: "address",
      placeholder: " Address",
    },

    {
      label: "date of birth:",
      type: "date",
      apikey: "dob",
    },
    {
      label: "email:",
      type: "email",
      apikey: "email",
      placeholder: "Email ",
    },

    {
      label: "phone no:",
      type: "text",
      apikey: "phone_no",
      placeholder: "E.g:9878765432 ",
    },
    {
      label: "gender:",
      apikey: "gender",
      Gender: [
        {
          label: "male",
          type: "radio",
          apikey: "gender",
          value: "male",
        },
        {
          label: "female",
          type: "radio",
          apikey: "gender",
          value: "female",
        },
      ],
    },
    {
      label: "level of education:",
      apikey: "level_of_education",
      Gender: [
        {
          label: "slc",
          type: "radio",
          apikey: "level_of_education",
          value: "slc",
        },
        {
          label: "+2",
          type: "radio",
          apikey: "level_of_education",
          value: "+2",
        },
        {
          label: "bachelor",
          type: "radio",
          apikey: "level_of_education",
          value: "bachelor",
        },
        {
          label: "master",
          type: "radio",
          apikey: "level_of_education",
          value: "master",
        },
      ],
    },
    {
      grid: [
        {
          label: "guardians_name:",
          type: "text",
          apikey: "guardians_name",
          placeholder: "Enter your guardian name ",
        },

        {
          label: "guardian_number:",
          type: "text",
          apikey: "guardians_phone_no",
          placeholder: "Enter your guardian number ",
        },
        {
          label: " name_of_school/college:",
          type: "text",
          apikey: "school_or_clg_name",
          placeholder: "School/college name ",
        },
      ],
    },
  ];
  const SelectData = [
    {
      as: "select",
      apikey: "course_names",
      options: [
        {
          id: "0",
          course_name: "choose any course name",
          //   apikey: "course_names",
        },
        ...courseName,
      ],
    },

    {
      label: "shift(Time):",
      apikey: "shifts",
      Shift: [
        {
          label: "Morning",
          type: "radio",
          apikey: "shifts",
          value: "morning",
        },
        {
          label: "Mid Day",
          type: "radio",
          apikey: "shifts",
          value: "midday",
        },
        {
          label: "Day",
          type: "radio",
          apikey: "shifts",
          value: "day",
        },
      ],
    },
  ];

  const FormImage = [
    {
      type: "file",
      apikey: "image",
      //   placeholder: "image ",
    },
  ];
  const AdmissionFormSchema = Yup.object().shape({
    full_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    address: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    guardians_name: Yup.string().required("Required"),
    guardians_phone_no: Yup.string().required("Required"),
    phone_no: Yup.string().required("Required"),
    level_of_education: Yup.string().required("Required"),
    school_or_clg_name: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    course_names: Yup.string(),
    description: Yup.string(),
    shifts: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
  });
  const Submit = (values) => {
    axios
      .post("https://hubitnep.herokuapp.com/course")
      .then((res) => {
        if (res.status === 200) {
          //   toast.success("Form added successfullty");
          alert("Form added successfullty");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <div className="relative">
        <div className=" w-full h-80  bg-main ">
          <Image
            src={bg}
            layout="fill"
            objectfit="cover"
            alt="Loading ..."
            className=" opacity-75 "
          />
        </div>
        <div className="absolute top-20 /0 left-8 sm:left-20 text-white capitalize">
          <div className="font-bold  text-3xl"> Student Admission Form</div>
          <div className="Poppins text-xs w-2/3 font-light mt-2 ">
            Enter your admission information below to enroll to your interested
            IT Course at your comfort, we have made available the Online
            Admission Form below!
          </div>
          <div className="Poppins text-sm mt-2">home/courses</div>
          {/* <button className="px-6 py-2 bg-[#FACC15] Poppins text-black font-medium text-xs mt-2 rounded-full">View Form</button> */}
        </div>
      </div>
      <div className="px-2">
        <div className="  rounded-t-2xl">
          <div className="flex flex-col w-full justify-center items-center pb-5 pt-16 gap-2">
            <div className=" w-full   Poppins  text-center uppercase text-xl  text-black font-medium">
              {" "}
              student enrollment registration form:
            </div>
            <div className="text-xs Poppins capitalize ">
              <p>
                Fill out the form carefully for registration. All Asterisks (*)
                fields are mandatory to fill-up.
              </p>
            </div>
            <div className="flex bg-[#EEEAEA] py-2 px-4 rounded-full text-xs gap-8 mt-5 Poppins">
              <button>Personel Information</button>
              <button>Payment Option</button>
              <button>Review Details</button>
            </div>
          </div>
          <Formik
            initialValues={{
              full_name: "",
              address: "",
              phone_no: "",
              dob: "",
              guardians_name: "",
              guardians_phone_no: "",
              email: "",
              gender: "",
              level_of_education: "",
              school_or_clg_name: "",
              image: "",
              shifts: "",
              course_names: "",
              description: "",
            }}
            validationSchema={AdmissionFormSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              //   alert(5);
              //   resetForm();
              Submit(values);
            }}
          >
            {({ errors, touched, handleSubmit, values, setFieldValue }) => (
              <div>
                <Form onSubmit={handleSubmit}>
                  <div className="flex flex-col  px-7 mb-16">
                    <div className={`  flex justify-center  `}>
                      {FormImage.map((val, i) => {
                        let AllImage = val.apikey;
                        return (
                          <div key={i}>
                            <div className=" capitalize    font-semibold text-lg text-gray-700">
                              <label
                                className="cursor-pointer "
                                htmlFor={val.apikey}
                              >
                                {val.label}
                              </label>
                            </div>
                            <div className="   ">
                              <label
                                htmlFor={val.apikey}
                                className={`cursor-pointer`}
                              >
                                <Image
                                  objectFit="cover"
                                  objectPosition={"top"}
                                  src={
                                    values[val.apikey]
                                      ? URL.createObjectURL(values[val.apikey])
                                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeH9llEv5AAEqHYkOwwIjcJa0VFPVERRUuw&usqp=CAU"
                                  }
                                  alt="Loading ..."
                                  layout="responsive"
                                  height={100}
                                  width={100}
                                  className="m-auto h-60 laptop:h-80 rounded-full "
                                />
                              </label>
                            </div>
                            <div className="">
                              {" "}
                              <label
                                htmlFor={val.apikey}
                                className="px-4   capitalize cursor-pointer  border-none outline-none   text-black font-medium "
                              >
                                choose your profile
                              </label>
                            </div>
                            <div className="hidden">
                              <input
                                name={val.apikey}
                                id={val.apikey}
                                type={val.type}
                                accept={val.accept}
                                onChange={(e) => {
                                  let file = e.target.files[0];
                                  console.log(file, AllImage);
                                  setFieldValue(AllImage, e.target.files[0]);
                                }}
                              />
                            </div>
                            <div
                              className={`${
                                errors[val.apikey] && touched[val.apikey]
                                  ? "bg-red-100 my-2"
                                  : ""
                              } text-red-400 py-1 px-2 text-xs font-medium`}
                            >
                              {errors[val.apikey] && touched[val.apikey]
                                ? errors[val.apikey]
                                : ""}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="grid grid-cols-2 gap-16 col-start-3 col-span-10 px-40 mt-16 ">
                      {admissionForm.map((val, i) => {
                        if (val.Gender) {
                          return (
                            <div>
                              <div className="flex col-span-5 flex-col  h-14  gap-3  ">
                                <div className="  px-2  capitalize Poppins text-sm  w-fit flex  items-center">
                                  {val.label}
                                </div>
                                <div className="flex  gap-5   ">
                                  {val.Gender.map((val, i) => {
                                    return (
                                      <div key={i} className=" ">
                                        <div className=" flex   px-1 h-full items-center justify-center ">
                                          <div className="w-full ">
                                            <Field
                                              type={val.type}
                                              value={val.value}
                                              name={val.apikey}
                                              className=" w-full form-radio checked:bg-main   px-4 py-1.5  "
                                            />
                                          </div>
                                          <div className="w-fit ml-2 ">
                                            <div className="  capitalize w-fit Poppins text-sm text-gray-500 flex justify-center  items-center">
                                              <label>{val.label}</label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                              <div
                                className={`text-red-400 ${
                                  errors[val.apikey] && touched[val.apikey]
                                    ? " bg-red-100 my-2"
                                    : ""
                                }  px-1.5 py-1  text-xs font-medium`}
                              >
                                {errors[val.apikey] && touched[val.apikey]
                                  ? errors[val.apikey]
                                  : ""}
                              </div>
                            </div>
                          );
                        } else {
                          if (val.grid) {
                            return val.grid.map((val, i) => {
                              return (
                                <div key={i} className="  w-full">
                                  <div className="flex flex-col gap-3  ">
                                    <div className="w-fit">
                                      <div className="  px-2 h-full capitalize text-sm Poppins w-fit flex  items-center">
                                        <label>{val.label}</label>
                                      </div>{" "}
                                    </div>
                                    <div className="w-full">
                                      <Field
                                        type={val.type}
                                        placeholder={val.placeholder}
                                        name={val.apikey}
                                        className=" w-full bg-[#EEEAEA] rounded-full   px-4 py-1.5  "
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className={`text-red-400  ${
                                      errors[val.apikey] && touched[val.apikey]
                                        ? " bg-red-100 my-2"
                                        : ""
                                    }  px-2 py-1 text-xs font-medium`}
                                  >
                                    {errors[val.apikey] && touched[val.apikey]
                                      ? errors[val.apikey]
                                      : ""}
                                  </div>
                                </div>
                              );
                            });
                          } else {
                            return (
                              <div key={i} className=" ">
                                <div className="flex flex-col gap-3 ">
                                  <div className="w-fit">
                                    <div className="  px-2 h-full capitalize text-sm Poppins  w-fit flex  items-center">
                                      <label>{val.label}</label>
                                    </div>{" "}
                                  </div>
                                  <div className="w-full">
                                    <Field
                                      type={val.type}
                                      placeholder={val.placeholder}
                                      name={val.apikey}
                                      className=" w-full bg-[#EEEAEA] rounded-full  px-4 py-1.5  "
                                    />
                                  </div>
                                </div>
                                <div
                                  className={`text-red-400  ${
                                    errors[val.apikey] && touched[val.apikey]
                                      ? " my-2  bg-red-100"
                                      : ""
                                  }  px-2 py-1 text-xs font-medium`}
                                >
                                  {errors[val.apikey] && touched[val.apikey]
                                    ? errors[val.apikey]
                                    : ""}
                                </div>
                              </div>
                            );
                          }
                        }
                      })}
                    </div>
                    {/* for images or document */}
                  </div>
                  <div>
                    <NameOfCourseToEnroll
                      SelectData={SelectData}
                      values={values}
                      errors={errors}
                      touched={touched}
                      Field={Field}
                      description="description"
                    />
                  </div>
                  <div className=" flex mb-5 px-40 ">
                    <div className="w-full flex gap-2 items-center Poppins  px-8  text-gray-600 mt-5">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 "
                          onClick={() => setClickedCheckBox(!clickedCheckBox)}
                        />
                      </div>

                      <div className="text-xs Poppins font-regular capitalize">
                        I agree to the
                        <button className="text-main capitalize mx-1">
                          {" "}
                          terms and conditions
                        </button>
                      </div>
                    </div>
                    <div className="w-full my-5 flex justify-end  px-7">
                      <button
                        type="submit"
                        className={`px-5 py-2 capitalize bg-main text-white w-fit 
                        
                      ${
                        clickedCheckBox
                          ? "opacity-100 cursor-pointer transition-all hover:scale-105 ease-in-out duration-300 "
                          : " opacity-50 cursor-not-allowed"
                      } rounded-md
                     `}
                        disabled={clickedCheckBox ? "" : "disabled "}
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
}

export default AdmissionForm;