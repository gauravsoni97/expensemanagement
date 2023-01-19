import { useFormik, validateYupSchema } from "formik";
import React, { useState } from "react";
import emptystatehome from "../Imgs/emptystatehome2.png";
import * as Yup from "yup";
import ExpenseListRight from "./ExpenseListRight/ExpenseListRight";

import "./Main.css";

let fiftyPercent = 50;
let thirtyPercent = 30;
let twentyPercent = 20;

const Main = () => {
  const [salaryToNeeds, setSalaryAmount] = useState(0);
  const [salaryToWants, setSalaryToWants] = useState(0);
  const [salaryToInvest, setSalaryToInvest] = useState(0);

  const formik = useFormik({
    initialValues: {
      salary: "",
    },

    validationSchema: Yup.object({
      salary: Yup.number()
        .max(1000000000000, "Enter Salary less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
      setSalaryAmount((values.salary / 100) * fiftyPercent);
      setSalaryToWants((values.salary / 100) * thirtyPercent);
      setSalaryToInvest((values.salary / 100) * twentyPercent);

      formik.resetForm();
    },
  });

  // ------------- right side form

  const [monthFilter, setMonthFilter] = useState("jan");

  const [formVisible, setFormVisible] = useState(-1);
  
  const handleNeedsFrom = () => {
    setFormVisible(0);
    console.log(formVisible);
  };
  const handleWantsFrom = () => {
    setFormVisible(1);
    console.log(formVisible);
  };
  const handleInvestFrom = () => {
    setFormVisible(2);
    console.log(formVisible);
  };

  return (
    <div className="Main_Box flex align-start justify-start flex-wrap  bg-white rounded-xl">
      {/* left side  */}

      <div className="mainBox-leftside bg-[#FFE0CA] rounded-xl  p-3  ">
        <h2 className="mainheading_topleft">Income Management</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="inputfield">
            <label className="text-sm font-medium">Monthly Income</label>
            <input
              name="salary"
              type="number"
              min="0"
              placeholder="100000"
              value={formik.values.salary}
              onChange={formik.handleChange}
            />
            <p
              className={
                formik.touched.salary && formik.errors.salary
                  ? "text-red-600  text-xs font-medium"
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
            Manage Income
          </button>
        </form>

        <div className="needs_wants_invest_parent mt-6 ">
          <p className="text-sm font-medium ">*50-30-20 Rule of Budgeting*</p>
          <div className="split_in_needs_wants_invest">
            <div className="needs_from_salary bg-[#FFFBEC] my-4 rounded-lg p-2 pt-3 px-4 flex align-center justify-between flex-col">
              <p className="font-medium text-sm mb-3 ">
                Needs (50%):&nbsp; {Math.round(salaryToNeeds)}
              </p>
              <button
                onClick={handleNeedsFrom}
                type="button"
                className="w-full text-gray-900 border border-gray-800 hover:text-white hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center mb-2"
              >
                Use Amount
              </button>
            </div>

            <div className="needs_from_salary bg-[#FFFBEC] my-4 rounded-lg p-2 pt-3 px-4 flex align-center justify-between flex-col">
              <p className="font-medium text-sm mb-3 ">
                Wants (30%):&nbsp; {Math.round(salaryToWants * 100) / 100}
              </p>
              <button
                onClick={handleWantsFrom}
                type="button"
                className="w-full text-gray-900 border border-gray-800 hover:text-white hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center mb-2"
              >
                Use Amount
              </button>
            </div>

            <div className="needs_from_salary bg-[#FFFBEC] my-4 rounded-lg p-2 pt-3 px-4 flex align-center justify-between flex-col">
              <p className="font-medium text-sm mb-3 ">
                Invest (20%):&nbsp; {Math.round(salaryToInvest * 100) / 100}
              </p>
              <button
                onClick={handleInvestFrom}
                type="button"
                className="w-full text-gray-900 border border-gray-800 hover:text-white hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center mb-2"
              >
                Use Amount
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------  right side form -------------------------- */}

      {salaryToInvest != 0 && formVisible !== -1 ? (
        <ExpenseListRight
          monthFilter={monthFilter}
          setMonthFilter={setMonthFilter}
          salaryToNeeds={salaryToNeeds}
          salaryToWants={salaryToWants}
          salaryToInvest={salaryToInvest}
          formVisible={formVisible}
        />
      ) : (
        <div className="right_side_empty_image flex align-center justify-center flex-col">
          <img
            className="empty_state_home_image  object-contain"
            src={emptystatehome}
            alt="money management image"
            loading="lazy"
          />
          <h2 className="empty-heading text-center text-lg font-medium">
            Let's Manage your Income
          </h2>
          <p className="text-gray-400 text-sm text-center mt-3">
            Please fill your income first in given form
          </p>
        </div>
      )}
    </div>
  );
};

export default Main;
