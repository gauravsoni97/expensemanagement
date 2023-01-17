import { useFormik, validateYupSchema } from "formik";
import React, { useState } from "react";

import * as Yup from "yup";
import ExpenseListRight from "./ExpenseListRight/ExpenseListRight";

import "./Main.css";

let fiftyPercent = 50;
let thirtyPercent = 30;
let twentyPercent = 20;

const Main = () => {
  const [salaryToNeeds, setSalaryToNeeds] = useState("___");
  const [salaryToWants, setSalaryToWants] = useState("___");
  const [salaryToInvest, setSalaryToInvest] = useState("___");

  const formik = useFormik({
    initialValues: {
      date: "",
      salary: "",
    },

    validationSchema: Yup.object({
      date: Yup.date().required("Date is Required*"),

      salary: Yup.number()
        .max(1000000000000, "Enter Salary less than 1 Trillion")
        .required("Amount is Required"),
    }),

    onSubmit: (values) => {
      console.log(values);

      setSalaryToNeeds((formik.values.salary / 100) * fiftyPercent);
      setSalaryToWants((formik.values.salary / 100) * thirtyPercent);
      setSalaryToInvest((formik.values.salary / 100) * twentyPercent);
    },
  });





  // ------------- right side form 


  const [filter, setFilter] = useState("needs");
  const [monthFilter, setMonthFilter] = useState("jan");

  return (
    <div className="Main_Box flex align-start justify-start flex-wrap  bg-white rounded-xl">
      {/* left side  */}

      <div className="mainBox-leftside bg-[#FFE0CA] rounded-xl  p-3 ">
        <h2 className="mainheading_topleft">Expense Management</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="inputfield">
            <label>Select Date</label>
            <input
              name="date"
              type="date"
              placeholder="12-12"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <p
              className={
                formik.touched.date && formik.errors.date
                  ? "text-red-600  text-sm font-medium"
                  : ""
              }
            >
              {formik.touched.date && formik.errors.date
                ? formik.errors.date
                : ""}
            </p>
          </div>
          <div className="inputfield">
            <label>Monthly Salary</label>
            <input
              name="salary"
              type="number"
              placeholder="100000"
              value={formik.values.salary}
              onChange={formik.handleChange}
            />
            <p
              className={
                formik.touched.salary && formik.errors.salary
                  ? "text-red-600  text-sm font-medium"
                  : ""
              }
            >
              {formik.touched.salary && formik.errors.salary
                ? formik.errors.salary
                : ""}
            </p>
          </div>

          <button
            type="submit"
            className=" w-full text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Manage Amount
          </button>
        </form>

        <div className="needs_wants_invest_parent mt-6">
          <i>50-30-20 Rule of Budgeting</i>
          <div className="split_in_needs_wants_invest">
            <div className="needs_from_salary bg-[#FFFBEC] my-5 rounded-xl p-4">
              <p>50% on Needs: &nbsp; {salaryToNeeds} </p>
            </div>
            <div className="wants_from_salary bg-[#FFFBEC] my-5 rounded-xl p-4">
              <p>30% on Wants: &nbsp; {salaryToWants} </p>
            </div>
            <div className="invest_from_salary bg-[#FFFBEC] my-5 rounded-xl p-4">
              <p>20% on Invest:&nbsp; {salaryToInvest} </p>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------  right side form -------------------------- */}

      <ExpenseListRight
        filter={filter}
        setFilter={setFilter}
        monthFilter={monthFilter}
        setMonthFilter={setMonthFilter}
      />
    </div>
  );
};

export default Main;
