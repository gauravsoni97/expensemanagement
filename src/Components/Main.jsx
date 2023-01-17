import { useFormik, validateYupSchema } from "formik";
import React, { useState } from "react";

import * as Yup from "yup";

import "./Main.css";

let fiftyPercent = 50;
let thirtyPercent = 30;
let twentyPercent = 20;

const Main = () => {
  const [salaryToNeeds, setSalaryToNeeds] = useState("");
  const [salaryToWants, setSalaryToWants] = useState("");
  const [salaryToInvest, setSalaryToInvest] = useState("");

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
              <p>50% on Needs: {salaryToNeeds} </p>
            </div>
            <div className="wants_from_salary bg-[#FFFBEC] my-5 rounded-xl p-4">
              <p>30% on Wants: {salaryToWants} </p>
            </div>
            <div className="invest_from_salary bg-[#FFFBEC] my-5 rounded-xl p-4">
              <p>20% on Invest:{salaryToInvest} </p>
            </div>
          </div>
        </div>
      </div>

      {/* right side  */}

      {/* <div className="mainBox-rightside p-3 ">
      <div className="filter_box">
        <div>Filter By:</div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="needs">Needs</MenuItem>
              <MenuItem value="wants">Wants</MenuItem>
              <MenuItem value="invest">Invest</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="input_amount_form_section">
        <form onSubmit={handleBudgetForm}>
          <div className="inputfield inputfield_rightside">
            <label>Enter Name</label>
            <input
              type="text"
              placeholder="Sugar"
              value={addNeeds.name}
              onChange={(e) =>
                setAddNeeds({ ...addNeeds, name: e.target.value })
              }
            />
          </div>
          <div className="inputfield inputfield_rightside">
            <label>Enter Amount</label>
            <input
              type="number"
              placeholder="10000"
              value={addNeeds.price}
              onChange={(e) =>
                setAddNeeds({ ...addNeeds, price: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className=" w-full text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Use Amount
          </button>
        </form>
        <div className="balence_left_box ">
          <p className=" w-full bg-red-50 p-2 rounded-lg text-gray-800 text-center my-2 ">
            Balance left: {needsAmountFromSalary}
          </p>
        </div>
        <div className="list_amount_parent">
          <div className=" mt-5 list_by_filter flex align-center justify-between">

          <div className="filter_box w-full">
        <div>Filter By:</div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value)}
            >
              <MenuItem value="jan">Jan</MenuItem>
              <MenuItem value="feb">Feb</MenuItem>
              <MenuItem value="mar">Mar</MenuItem>
            </Select>
          </FormControl>
        </div>


      </div>
          </div>
          <div className="all_lists_parent">
            {listItem.length > 0 &&
              listItem.map((e, ind) => {
                return (
                  <div
                    className="listed_item flex align-center justify-between my-2 py-1.5 px-2 rounded-lg bg-blue-50"
                    key={ind}
                  >
                    <p className="listed_item_name">{e.name}</p>
                    <p className="listed_item_price">{e.price}</p>
                    <p className="listed_item_edit">
                      <i
                        className="ri-delete-bin-line"
                        onClick={() => onDeleteListItem(ind)}
                      ></i>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
 */}
    </div>
  );
};

export default Main;
