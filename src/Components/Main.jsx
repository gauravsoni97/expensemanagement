import { useFormik, validateYupSchema } from "formik";
import React, { useState } from "react";
import emptystatehome from "../Imgs/emptystatehome2.png";
import * as Yup from "yup";

import "./Main.css";
import { useEffect } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

let fiftyPercent = 50;
let thirtyPercent = 30;
let twentyPercent = 20;

const Main = () => {
  const [formData, setFormData] = useState({});

  console.log(formData);

const needsAmount = (formData.income / 100) * fiftyPercent;
 const wantsAmount = (formData.income / 100) * thirtyPercent;
 const investAmount = (formData.income / 100) * twentyPercent;







  const incomeForm = useFormik({
    initialValues: {income:formData},

    validationSchema: Yup.object({
      income: Yup.number()
        .max(1000000000000, "Enter income less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
     setFormData (values);


      incomeForm.resetForm();

      console.log(needsAmount, wantsAmount, investAmount);
    },
  });





  



  // -- needs wants invest form formik validation

  // --------- right side
  const [arrayOfNeeds, setArrayOfNeeds] = useState([]);
  const [arrayOfWants, setArrayOfWants] = useState([]);
  const [arrayOfInvest, setArrayOfInvest] = useState([]);

  const formik = useFormik({
    initialValues: {
      itemDate: "",
      itemName: "",
      itemPrice: "",
    },

    validationSchema: Yup.object({
      itemDate: Yup.date().required("Date is Required*"),
      itemName: Yup.string()
        .max(20, "Enter name less than 20 character*")
        .required("Name is Required*"),

      itemPrice: Yup.number()
        .max(1000000000000, "Enter income less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
      // {
      //   formVisible === 0 &&
      //     setArrayOfNeeds((preval) => {
      //       return [
      //         ...preval,
      //         { name: values.itemName, price: values.itemPrice },
      //       ];
      //     });
      // }
    },
  });

  // ------------- right side form

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

  // --------------- right side

  // Balance left code

  let needsTotalListSum = arrayOfNeeds
    .map((obj) => obj.price)
    .reduce((acc, cur) => acc + cur, 0);
  let wantsTotalListSum = arrayOfWants
    .map((obj) => obj.price)
    .reduce((acc, cur) => acc + cur, 0);
  let investTotalListSum = arrayOfInvest
    .map((obj) => obj.price)
    .reduce((acc, cur) => acc + cur, 0);

  // on delete list item from list

  const deleteNeedsFromList = (curInd) => {
    const updatedList = arrayOfNeeds.filter((ele, arrInd) => {
      return arrInd !== curInd;
    });
    setArrayOfNeeds(updatedList);
  };
  const deleteWantsFromList = (curInd) => {
    const updatedList = arrayOfWants.filter((ele, arrInd) => {
      return arrInd !== curInd;
    });
    setArrayOfWants(updatedList);
  };
  const deleteInvestFromList = (curInd) => {
    const updatedList = arrayOfInvest.filter((ele, arrInd) => {
      return arrInd !== curInd;
    });
    setArrayOfInvest(updatedList);
  };


// ================================================ use Effects ==============================

  

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);



  
  
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);



  return (
    <div className="Main_Box flex align-start justify-start flex-wrap  bg-white rounded-xl">
      {/* left side  */}

      <div className="mainBox-leftside bg-[#FFE0CA] rounded-xl  p-3  ">
        <h2 className="mainheading_topleft">Income Management</h2>

        <form onSubmit={incomeForm.handleSubmit}>
          <div className="inputfield">
            <label className="text-sm font-medium">Monthly Income</label>
            <input
              name="income"
              type="number"
              min="0"
              placeholder="100000"
              value={incomeForm.values.income}
              onChange={incomeForm.handleChange}
            />
            <p
              className={
                incomeForm.touched.income && incomeForm.errors.income
                  ? "text-red-600  text-xs font-medium"
                  : ""
              }
            >
              {incomeForm.touched.income && incomeForm.errors.income
                ? incomeForm.errors.income
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
            <div className="needs_from_income bg-[#FFFBEC] my-4 rounded-lg p-2 pt-3 px-4 flex align-center justify-between flex-col">
              <p className="font-medium text-sm mb-3 ">
                Needs (50%):&nbsp; {needsAmount}
              </p>
              <button
                onClick={handleNeedsFrom}
                type="button"
                className="w-full text-gray-900 border border-gray-800 hover:text-white hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center mb-2"
              >
                Use Amount
              </button>
            </div>

            <div className="needs_from_income bg-[#FFFBEC] my-4 rounded-lg p-2 pt-3 px-4 flex align-center justify-between flex-col">
              <p className="font-medium text-sm mb-3 ">
                Wants (30%):&nbsp; {wantsAmount}
              </p>
              <button
                onClick={handleWantsFrom}
                type="button"
                className="w-full text-gray-900 border border-gray-800 hover:text-white hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center mb-2"
              >
                Use Amount
              </button>
            </div>

            <div className="needs_from_income bg-[#FFFBEC] my-4 rounded-lg p-2 pt-3 px-4 flex align-center justify-between flex-col">
              <p className="font-medium text-sm mb-3 ">
                Invest (20%):&nbsp; {investAmount}
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

      {needsAmount != 0 && formVisible !== -1 ? (
        <div className="mainBox-rightside p-3">
          <div className="balence_left_box w-full ">
            <p
              className={`w-full ${
                (needsAmount - needsTotalListSum &&
                  wantsAmount - wantsTotalListSum &&
                  investAmount - investTotalListSum) <= 0
                  ? "bg-red-600 text-gray-50"
                  : "bg-green-50 text-gray-800"
              } p-3 border rounded-lg text-gray-800 text-center mb-3 `}
            >
              {formVisible === 0
                ? "Needs Balance:"
                : formVisible === 1
                ? "Wants Balance:"
                : formVisible === 2
                ? "Invest Balance:"
                : "Balance Left"}{" "}
              &nbsp;
              {Math.round(
                formVisible === 0
                  ? needsAmount - needsTotalListSum
                  : formVisible === 1
                  ? wantsAmount - wantsTotalListSum
                  : formVisible === 2
                  ? investAmount - investTotalListSum
                  : "-"
              )}
            </p>
          </div>

          <div className="input_amount_form_section">
            <form onSubmit={formik.handleSubmit}>
              <div className="inputfield inputfield_rightside">
                <label className="text-sm font-medium">Enter Date</label>
                <input
                  name="itemDate"
                  type="month"
                  placeholder="MM"
                  value={formik.values.itemDate}
                  onChange={formik.handleChange}
                />
                <p
                  className={
                    formik.touched.itemDate && formik.errors.itemDate
                      ? "text-red-600  text-xs  font-medium"
                      : ""
                  }
                >
                  {formik.touched.itemDate && formik.errors.itemDate
                    ? formik.errors.itemDate
                    : ""}
                </p>
              </div>
              <div className="inputfield inputfield_rightside">
                <label className="text-sm font-medium">Enter Name</label>
                <input
                  name="itemName"
                  type="text"
                  placeholder="Sugar"
                  value={formik.values.itemName}
                  onChange={formik.handleChange}
                />
                <p
                  className={
                    formik.touched.itemName && formik.errors.itemName
                      ? "text-red-600  text-xs  font-medium"
                      : ""
                  }
                >
                  {formik.touched.itemName && formik.errors.itemName
                    ? formik.errors.itemName
                    : ""}
                </p>
              </div>
              <div className="inputfield inputfield_rightside">
                <label className="text-sm font-medium">Enter Amount</label>
                <input
                  name="itemPrice"
                  type="number"
                  min="0"
                  placeholder="10000"
                  value={formik.values.itemPrice}
                  onChange={formik.handleChange}
                />
                <p
                  className={
                    formik.touched.itemPrice && formik.errors.itemPrice
                      ? "text-red-600  text-xs  font-medium"
                      : ""
                  }
                >
                  {formik.touched.itemPrice && formik.errors.itemPrice
                    ? formik.errors.itemPrice
                    : ""}
                </p>
              </div>
              <button
                type="submit"
                className=" w-full text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Use Amount
              </button>
            </form>

            <div className="list_amount_parent">
              <div className=" mt-5 list_by_filter flex align-center justify-between">
                <div className="filter_box w-full">
                  <div>Filter By:</div>
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <Select
                      //  value={monthFilter}
                      //  onChange={(e) => setMonthFilter(e.target.value)}
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
                {formVisible === 0 && (
                  <>
                    {arrayOfNeeds.length === 0 && (
                      <p className=" text-center text-sm pt-12 text-gray-600">
                        No data found
                      </p>
                    )}
                    {arrayOfNeeds?.map((e, ind) => {
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
                              onClick={() => deleteNeedsFromList(ind)}
                            ></i>
                          </p>
                        </div>
                      );
                    })}
                  </>
                )}
                {formVisible === 1 && (
                  <>
                    {arrayOfWants.length === 0 && (
                      <p className=" text-center text-sm pt-12 text-gray-600">
                        No data found
                      </p>
                    )}
                    {arrayOfWants?.map((e, ind) => {
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
                              onClick={() => deleteWantsFromList(ind)}
                            ></i>
                          </p>
                        </div>
                      );
                    })}
                  </>
                )}
                {formVisible === 2 && (
                  <>
                    {arrayOfInvest.length === 0 && (
                      <p className=" text-center text-sm pt-12 text-gray-600">
                        No data found
                      </p>
                    )}
                    {arrayOfInvest?.map((e, ind) => {
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
                              onClick={() => deleteInvestFromList(ind)}
                            ></i>
                          </p>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
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
