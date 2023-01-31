import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
const schema = yup.object().shape({
  FullName: yup.string().required("fullname is required"),
  email: yup.string().required("email is required"),
  phone: yup
    .string()
    .required("contact number is required")
    .max(10, "invalid number")
    .min(10, "invalid number"),
});

function Inquiry() {
  const [Show, setShow] = useState(false);
  const FormFields = [
    {
      name: "FullName",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "course selection",
      type: "text",
    },
  ];
  const postData = () => {
    axios.post("192.168.1.107:4000/inquire", postData);
  };

  return (
    <>
      <div>
        {/* send us inquiry button */}
        <div>
          <button
            onClick={() => setShow(true)}
            className="capitalize bg-main text-white fixed top-80 bottom-50 right-0 border-none rounded-lg p-2"
          >
            send us inquiry
          </button>
        </div>
        {/* form body */}
        <div
          className={`border-none rounded-md fixed top-36 bottom-60 right-0 w-72 h-fit bg-white shadow-xl shadow-gray-500 text-center py-5 cursor-pointer ${
            Show
              ? "transition-all duration-500 delay-100 mr-0"
              : "ease-in-out duration-500 delay-100 -mr-[100%]"
          }`}
        >
          <div className="flex justify-between px-5">
            <h1 className="capitalize text-center text-main text-2xl">
              get in touch
            </h1>
            <RiCloseFill
              onClick={() => setShow(false)}
              className="text-2xl text-white border-none rounded-full bg-main -mt-7 -mr-1"
            />
          </div>
          <Formik
            initialValues={{
              FullName: "",
              email: "",
              phone: "",
            }}
            validationSchema={schema}
            onSubmit={(val) => {
              console.log(val);
              postData(val);
            }}
          >
            {({ handleSubmit, values }) => {
              return (
                <Form className="px-5">
                  {FormFields.map((val, i) => {
                    return (
                      <div key={i} className="flex flex-col py-2">
                        <Field
                          type={val.type}
                          placeholder={`enter your ${val.name}`}
                          name={val.name}
                          className="border-none rounded-md py-2 px-3    bg-gray-200"
                        />
                        {console.log(values)}
                        <ErrorMessage
                          name={val.name}
                          component={"div"}
                          classname="text-main "
                        />
                      </div>
                    );
                  })}

                  <textarea
                    rows="3"
                    cols="6"
                    className="border-none px-3 rounded-md bg-gray-200 w-full"
                    placeholder="Description..."
                  ></textarea>
                  <div className=" flex gap-1 px-5">
                    <input type="checkbox" />
                    <p className="text-sm">
                      I agree with the
                      <span className="text-main">Terms and conditions</span> of
                      the institue.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-fit px-8 py-3 mt-5
            bg-main text-white text-[14px] border-none rounded-full capitalize"
                  >
                    send request
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Inquiry;