import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import {IoPerson} from 'react-icons/io5';
import {BsTelephoneFill} from "react-icons/bs";

function CallSection() {
 return(
  <>
  <div className="w-full bg-gray-400 py-24">
    <div className="flex justify-even w-full">
      <div className="capitalize flex flex-col py-10 text-3xl font-bold">
        let us give you a <span className="text-main">quick call</span>!
        <p className="text-sm font-normal">leave us your contact number so our administratives can contact you as soon as possible.</p>
      </div>

    </div>

  </div>
  </>
 )
}

export default CallSection;
