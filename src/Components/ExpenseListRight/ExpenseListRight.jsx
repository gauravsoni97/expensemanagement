import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import * as Yup from "yup";

const ExpenseListRight = ({
  monthFilter,
  setMonthFilter,
  salaryToNeeds,
  salaryToWants,
  salaryToInvest,
  formVisible,
}) => {
  const [arrayOfList, setArrayOfList] = useState([]);

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
        .max(1000000000000, "Enter Salary less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
      setArrayOfList((preval) => {
        return [...preval, { name: values.itemName, price: values.itemPrice }];
      });

      formik.resetForm();
    },
  });

  // Balance left code

  let totalListSum = arrayOfList
    .map((obj) => obj.price)
    .reduce((acc, cur) => acc + cur, 0);

  // on delete list item from list

  const onDeleteListItem = (curInd) => {
    const updatedList = arrayOfList.filter((ele, arrInd) => {
      return arrInd !== curInd;
    });
    setArrayOfList(updatedList);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(arrayOfList));
  }, [arrayOfList]);

  useEffect(() => {
    const storedList = localStorage.getItem("list");
    if (storedList) {
      setArrayOfList(JSON.parse(storedList));
    }
  }, []);

  return (
    <div className="mainBox-rightside p-3">
      <div className="balence_left_box w-full ">
        <p className=" w-full bg-red-50 p-3 border rounded-lg text-gray-800 text-center mb-3 ">
          Balance Left:
          {Math.round(
            formVisible === 0
              ? salaryToNeeds - totalListSum
              : formVisible === 1
              ? salaryToWants - totalListSum
              : formVisible === 2
              ? salaryToInvest - totalListSum
              : ""
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
            {arrayOfList.length == 0 && (
              <p className=" text-center text-sm pt-12 text-gray-600">
                No data found
              </p>
            )}
            {arrayOfList?.map((e, ind) => {
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
  );
};

export default ExpenseListRight;
