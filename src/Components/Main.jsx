import { useFormik, validateYupSchema } from "formik";
import React, { useState } from "react";
import emptystatehome from "../Imgs/emptystatehome2.png";
import * as Yup from "yup";

import "./Main.css";
import { useEffect } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

const Main = () => {
  const [splitAmounts, setSplitAmounts] = useState(
    JSON.parse(localStorage.getItem("splitAmounts")) || {
      needs: 0,
      wants: 0,
      invest: 0,
    }
  );

  // --------- Right side states ---------------------------------------

  const [arrayOfWants, setArrayOfWants] = useState(
    JSON.parse(localStorage.getItem("wantsArray")) || []
  );
  const [arrayOfInvest, setArrayOfInvest] = useState(
    JSON.parse(localStorage.getItem("investArray")) || []
  );

  const [filteredArrayOfWants, setFilteredArrayOfWants] = useState([]);
  const [filteredArrayOfInvest, setFilteredArrayOfInvest] = useState([]);
  const [formVisible, setFormVisible] = useState(-1);

  // --------------------------------------------------------------------

  const [arrayOfNeeds, setArrayOfNeeds] = useState(
    JSON.parse(localStorage.getItem("needsArray")) || []
  );
  const [filteredArrayOfNeeds, setFilteredArrayOfNeeds] = useState([]);

  const [selectedMonth, setSelectedMonth] = useState("Month");

  const splitArrayOfNeeds = arrayOfNeeds.map((ele, ind) =>
    ele.pickedDate.split("-")
  );

  const splitYearFromNeedsArray = splitArrayOfNeeds.map((ele, ind) => ele[0]);
  const splitMonthFromNeedsArray = splitArrayOfNeeds.map(
    (ele, ind) => ele[1] - 1
  );

  console.log(splitMonthFromNeedsArray);

  const monthsName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const CustomMonthIndex = monthsName.map((ele, index) => index);

  console.log(CustomMonthIndex);

  const handleMonthFilter = (e) => {
    console.log(e.target.value);
  };

  // ----------------------------------------------------------------------------------------------------

  const incomeForm = useFormik({
    initialValues: { income: "" },

    validationSchema: Yup.object({
      income: Yup.number()
        .max(1000000000000, "Enter amount less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
      setSplitAmounts({
        needs: values.income * 0.5,
        wants: values.income * 0.3,
        invest: values.income * 0.2,
      });
      incomeForm.resetForm();
    },
  });

  // ========================================================== Right side forms ================================

  // needs input form

  const needsForm = useFormik({
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
      setArrayOfNeeds((preval) => {
        return [
          {
            pickedDate: values.itemDate,
            name: values.itemName,
            price: values.itemPrice,
          },
          ...preval,
        ];
      });
      needsForm.resetForm();
    },
  });

  const wantsForm = useFormik({
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
      setArrayOfWants((preval) => {
        return [
          {
            pickedDate: values.itemDate,
            name: values.itemName,
            price: values.itemPrice,
          },
          ...preval,
        ];
      });
      wantsForm.resetForm();
    },
  });

  const investForm = useFormik({
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
      setArrayOfInvest((preval) => {
        return [
          {
            pickedDate: values.itemDate,
            name: values.itemName,
            price: values.itemPrice,
          },
          ...preval,
        ];
      });
      investForm.resetForm();
    },
  });

  const handleNeedsForm = () => setFormVisible(0);
  const handleWantsForm = () => setFormVisible(1);
  const handleInvestForm = () => setFormVisible(2);

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
    localStorage.setItem("splitAmounts", JSON.stringify(splitAmounts));
  }, [splitAmounts]);

  // -------------- use effects for  right side forms -----------------

  useEffect(() => {
    localStorage.setItem("needsArray", JSON.stringify(arrayOfNeeds));
  }, [arrayOfNeeds]);

  useEffect(() => {
    localStorage.setItem("wantsArray", JSON.stringify(arrayOfWants));
  }, [arrayOfWants]);

  useEffect(() => {
    localStorage.setItem("investArray", JSON.stringify(arrayOfInvest));
  }, [arrayOfInvest]);

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
                Needs (50%):&nbsp; {splitAmounts.needs}
              </p>
              <button
                onClick={handleNeedsForm}
                type="button"
                className="w-full text-gray-900 border border-gray-800 hover:text-white hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center mb-2"
              >
                Use Amount
              </button>
            </div>

            <div className="needs_from_income bg-[#FFFBEC] my-4 rounded-lg p-2 pt-3 px-4 flex align-center justify-between flex-col">
              <p className="font-medium text-sm mb-3 ">
                Wants (30%):&nbsp; {splitAmounts.wants}
              </p>
              <button
                onClick={handleWantsForm}
                type="button"
                className="w-full text-gray-900 border border-gray-800 hover:text-white hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center mb-2"
              >
                Use Amount
              </button>
            </div>

            <div className="needs_from_income bg-[#FFFBEC] my-4 rounded-lg p-2 pt-3 px-4 flex align-center justify-between flex-col">
              <p className="font-medium text-sm mb-3 ">
                Invest (20%):&nbsp; {splitAmounts.invest}
              </p>
              <button
                onClick={handleInvestForm}
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

      {splitAmounts.needs !== 0 && formVisible !== -1 ? (
        <div className="mainBox-rightside p-3">
          <div className="balence_left_box w-full ">
            <p
              className={`w-full ${
                (formVisible === 0 &&
                  splitAmounts.needs - needsTotalListSum < 0) ||
                (formVisible === 1 &&
                  splitAmounts.wants - needsTotalListSum < 0) ||
                (formVisible === 2 &&
                  splitAmounts.invest - needsTotalListSum < 0)
                  ? "bg-red-200 text-gray-50"
                  : "bg-green-50 text-gray-800"
              } 
           
              
                p-3 border rounded-lg text-gray-800 text-center mb-3 `}
            >
              {formVisible === 0
                ? "Needs Balance:"
                : formVisible === 1
                ? "Wants Balance:"
                : formVisible === 2
                ? "Invest Balance:"
                : "Balance Left"}
              &nbsp;
              {Math.round(
                formVisible === 0
                  ? splitAmounts.needs - needsTotalListSum
                  : formVisible === 1
                  ? splitAmounts.wants - wantsTotalListSum
                  : formVisible === 2
                  ? splitAmounts.invest - investTotalListSum
                  : "-"
              )}
            </p>
          </div>

          <div className="input_amount_form_section">
            {formVisible === 0 ? (
              <form onSubmit={needsForm.handleSubmit}>
                <div className="inputfield inputfield_rightside">
                  <label className="text-sm font-medium">Enter Date</label>
                  <input
                    name="itemDate"
                    type="date"
                    placeholder="MM"
                    value={needsForm.values.itemDate}
                    onChange={needsForm.handleChange}
                  />
                  <p
                    className={
                      needsForm.touched.itemDate && needsForm.errors.itemDate
                        ? "text-red-600  text-xs  font-medium"
                        : ""
                    }
                  >
                    {needsForm.touched.itemDate && needsForm.errors.itemDate
                      ? needsForm.errors.itemDate
                      : ""}
                  </p>
                </div>
                <div className="inputfield inputfield_rightside">
                  <label className="text-sm font-medium">Enter Name</label>
                  <input
                    name="itemName"
                    type="text"
                    placeholder="Sugar"
                    value={needsForm.values.itemName}
                    onChange={needsForm.handleChange}
                  />
                  <p
                    className={
                      needsForm.touched.itemName && needsForm.errors.itemName
                        ? "text-red-600  text-xs  font-medium"
                        : ""
                    }
                  >
                    {needsForm.touched.itemName && needsForm.errors.itemName
                      ? needsForm.errors.itemName
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
                    value={needsForm.values.itemPrice}
                    onChange={needsForm.handleChange}
                  />
                  <p
                    className={
                      needsForm.touched.itemPrice && needsForm.errors.itemPrice
                        ? "text-red-600  text-xs  font-medium"
                        : ""
                    }
                  >
                    {needsForm.touched.itemPrice && needsForm.errors.itemPrice
                      ? needsForm.errors.itemPrice
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
            ) : formVisible === 1 ? (
              <form onSubmit={wantsForm.handleSubmit}>
                <div className="inputfield inputfield_rightside">
                  <label className="text-sm font-medium">Enter Date</label>
                  <input
                    name="itemDate"
                    type="date"
                    placeholder="MM"
                    value={wantsForm.values.itemDate}
                    onChange={wantsForm.handleChange}
                  />
                  <p
                    className={
                      wantsForm.touched.itemDate && wantsForm.errors.itemDate
                        ? "text-red-600  text-xs  font-medium"
                        : ""
                    }
                  >
                    {wantsForm.touched.itemDate && wantsForm.errors.itemDate
                      ? wantsForm.errors.itemDate
                      : ""}
                  </p>
                </div>
                <div className="inputfield inputfield_rightside">
                  <label className="text-sm font-medium">Enter Name</label>
                  <input
                    name="itemName"
                    type="text"
                    placeholder="Sugar"
                    value={wantsForm.values.itemName}
                    onChange={wantsForm.handleChange}
                  />
                  <p
                    className={
                      wantsForm.touched.itemName && wantsForm.errors.itemName
                        ? "text-red-600  text-xs  font-medium"
                        : ""
                    }
                  >
                    {wantsForm.touched.itemName && wantsForm.errors.itemName
                      ? wantsForm.errors.itemName
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
                    value={wantsForm.values.itemPrice}
                    onChange={wantsForm.handleChange}
                  />
                  <p
                    className={
                      wantsForm.touched.itemPrice && wantsForm.errors.itemPrice
                        ? "text-red-600  text-xs  font-medium"
                        : ""
                    }
                  >
                    {wantsForm.touched.itemPrice && wantsForm.errors.itemPrice
                      ? wantsForm.errors.itemPrice
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
            ) : formVisible === 2 ? (
              <form onSubmit={investForm.handleSubmit}>
                <div className="inputfield inputfield_rightside">
                  <label className="text-sm font-medium">Enter Date</label>
                  <input
                    name="itemDate"
                    type="date"
                    placeholder="MM"
                    value={investForm.values.itemDate}
                    onChange={investForm.handleChange}
                  />
                  <p
                    className={
                      investForm.touched.itemDate && investForm.errors.itemDate
                        ? "text-red-600  text-xs  font-medium"
                        : ""
                    }
                  >
                    {investForm.touched.itemDate && investForm.errors.itemDate
                      ? investForm.errors.itemDate
                      : ""}
                  </p>
                </div>
                <div className="inputfield inputfield_rightside">
                  <label className="text-sm font-medium">Enter Name</label>
                  <input
                    name="itemName"
                    type="text"
                    placeholder="Sugar"
                    value={investForm.values.itemName}
                    onChange={investForm.handleChange}
                  />
                  <p
                    className={
                      investForm.touched.itemName && investForm.errors.itemName
                        ? "text-red-600  text-xs  font-medium"
                        : ""
                    }
                  >
                    {investForm.touched.itemName && investForm.errors.itemName
                      ? investForm.errors.itemName
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
                    value={investForm.values.itemPrice}
                    onChange={investForm.handleChange}
                  />
                  <p
                    className={
                      investForm.touched.itemPrice &&
                      investForm.errors.itemPrice
                        ? "text-red-600  text-xs  font-medium"
                        : ""
                    }
                  >
                    {investForm.touched.itemPrice && investForm.errors.itemPrice
                      ? investForm.errors.itemPrice
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
            ) : (
              ""
            )}
            <div className="list_amount_parent">
              <div className=" mt-5 list_by_filter flex align-center justify-between">
                <div className="filter_box w-full">
                  <div>Filter By:</div>
                  <div className="flex align-center">
                    <FormControl
                      style={{ minWidth: "50px", fontSize: ".8rem" }}
                      size="small"
                    >
                      <Select
                        style={{ fontSize: ".8rem" }}
                        size="small"
                        value={selectedMonth}
                        onChange={handleMonthFilter}
                      >
                        {monthsName.map((monthList, index) => {
                          return <MenuItem value={index}>{monthList}</MenuItem>;
                        })}
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
                    {arrayOfNeeds.map((e, ind) => {
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
          <p className="text-gray-400 text-sm text-center mt-3 max-w-sm	px-8">
            Please fill your income first and then click on use amount.
          </p>
        </div>
      )}
    </div>
  );
};

export default Main;
