import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

const RightSide = ({
  splitAmounts,
  formVisible,
  needsTotalListSum,
  wantsTotalListSum,
  investTotalListSum,
  needsForm,
  wantsForm,
  investForm,
  selectedMonth, 
  handleMonthFilter,
  arrayOfNeeds,
  arrayOfWants,
  arrayOfInvest,
  filteredNeedsArray,
  deleteNeedsFromList,
  deleteWantsFromList,
  deleteInvestFromList,
  emptystatehome,

}) => {
  return (
    <>
      {splitAmounts.needs !== 0 && formVisible !== -1 ? (
        <div className="mainBox-rightside p-3">
          <div className="balence_left_box w-full ">
            <p
              className={`w-full ${
                (formVisible === 0 &&
                  splitAmounts.needs - needsTotalListSum < 0) ||
                (formVisible === 1 &&
                  splitAmounts.wants - wantsTotalListSum < 0) ||
                (formVisible === 2 &&
                  splitAmounts.invest - investTotalListSum < 0)
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
                  <div>Select Month</div>
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
                        <MenuItem value={0}>All</MenuItem>
                        <MenuItem value={1}>Jan</MenuItem>
                        <MenuItem value={2}>Feb</MenuItem>
                        <MenuItem value={3}>Mar</MenuItem>
                        <MenuItem value={4}>Apr</MenuItem>
                        <MenuItem value={5}>May</MenuItem>
                        <MenuItem value={6}>Jun</MenuItem>
                        <MenuItem value={7}>Jul</MenuItem>
                        <MenuItem value={8}>Aug</MenuItem>
                        <MenuItem value={9}>Sep</MenuItem>
                        <MenuItem value={10}>Oct</MenuItem>
                        <MenuItem value={11}>Nov</MenuItem>
                        <MenuItem value={12}>Dec</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="all_lists_parent">
                {formVisible === 0 && (
                  <>
                    {(arrayOfNeeds.length === 0 ||
                      (filteredNeedsArray.length === 0 &&
                        selectedMonth !== 0)) && (
                      <p className=" text-center text-sm pt-12 text-gray-600">
                        No data found
                      </p>
                    )}
                    {/* 
                                  selectmonth -> filtered array -> filtered array -- done
                                  selectMonth -> filteredarray = 0 -> emptystate
                                  clear filter -> all (month = 0 && filter = 0) -- done
                                  
                                  
                                  */}

                    {/* =========  Show all Data ====================== */}

                    {selectedMonth === 0 &&
                      arrayOfNeeds.map((e, ind) => {
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

                    {/* =========================== Filtered Array on select Month ========================== */}

                    {selectedMonth > 0 &&
                      filteredNeedsArray.length > 0 &&
                      filteredNeedsArray.map((e, ind) => {
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
    </>
  );
};

export default RightSide;