import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
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
  ];
  return (
    <>
      <Formik
        initialValues={{
          FullName: "",
          email: "",
          phone: "",
        }}
        validationSchema={schema}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        {({ handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              {FormFields.map((val, i) => {
                return (
                  <div key={i} className="space-y-6 flex gap-2">
                    <label htmlFor={val.name}>{val.name}</label>
                    <Field
                      type={val.type}
                      placeholder="enter your fullname"
                      name={val.name}
                      className="border-2 rounded-xl border-black"
                    />
                    <ErrorMessage
                      name={val.name}
                      component={"div"}
                      classname="text-red-600"
                    />
                  </div>
                );
              })}
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default Inquiry;