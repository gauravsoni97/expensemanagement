import React, { useState } from "react";
import "./Main.css";

let fiftyPercent = 50;
let thirtyPercent = 30;
let twentyPercent = 20;

const Main = () => {
  // left side states ------------------
  const [salaryInput, setSalaryInput] = useState();
  const [needsAmountFromSalary, setNeedsAmountFromSalary] = useState(0);
  const [wantsAmountFromSalary, setWantsAmountFromSalary] = useState(0);
  const [investAmountFromSalary, setInvestAmountFromSalary] = useState(0);

  // right side states --------------

  const [addNeeds, setAddNeeds] = useState({
    name:"",
    price:""
  });

  // const [addWants, setAddWants] = useState();
  // const [addInvest, setAddInvest] = useState();

  // ----- handlers

  const handleSalary = (e) => {
    e.preventDefault();
    setNeedsAmountFromSalary(Math.round((fiftyPercent / 100) * salaryInput));
    setWantsAmountFromSalary(Math.round((thirtyPercent / 100) * salaryInput));
    setInvestAmountFromSalary(Math.round((twentyPercent / 100) * salaryInput));
    setSalaryInput("");
  };

  const handleBudgetForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Main_Box flex align-start justify-start flex-wrap  bg-white rounded-xl">
      <div className="mainBox-leftside bg-[#FFE0CA] rounded-xl  p-3 ">
        <h2 className="mainheading_topleft">Expense Management</h2>
        <form onSubmit={handleSalary}>
          <div className="inputfield">
            <label>Select Month</label>
            <input type="month" placeholder="Jan-2023" />
          </div>
          <div className="inputfield">
            <label>Monthly Salary</label>
            <input
              type="number"
              placeholder="100000"
              value={salaryInput}
              onChange={(e) => setSalaryInput(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className=" w-full text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Manage Amount
          </button>
        </form>

        <div className="needs_wants_invest_parent mt-6">
          <i>50-30-20 Rule of Budgeting</i>
          <div className="split_in_needs_wants_invest">
            <div className="needs_from_salary bg-[#FFFBEC] my-3 rounded-xl p-3">
              <p>50% on Needs: {needsAmountFromSalary}</p>
            </div>
            <div className="wants_from_salary bg-[#FFFBEC] my-3 rounded-xl p-3">
              <p>30% on Wants: {wantsAmountFromSalary} </p>
            </div>
            <div className="invest_from_salary bg-[#FFFBEC] my-3 rounded-xl p-3">
              <p>20% on Invest: {investAmountFromSalary} </p>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------- Right Side ----------------------------------------- */}

      <div className="mainBox-rightside p-3 ">
        <div className="filter_box  flex align-center justify-between my-4">
          <span>Filter By:</span>
          <span> Needs - dropdown</span>
        </div>

        <div className="input_amount_form_section">
          <form onSubmit={handleBudgetForm}>
            <div className="inputfield inputfield_rightside">
              <label>Enter Name</label>
              <input type="text" placeholder="Sugar" value={addNeeds.name} onChange={(e)=>setAddNeeds({...addNeeds, name:e.target.value})} />
            </div>
            <div className="inputfield inputfield_rightside">
              <label>Enter Amount</label>
              <input type="number" placeholder="10000"  value={addNeeds.price} onChange={(e)=>setAddNeeds({...addNeeds, price:e.target.value})}  />
            </div>
            <button
              type="submit"
              className=" w-full text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Use Amount
            </button>
          </form>
          <div className="balence_left_box ">
            <p className=" w-full bg-red-50 p-2 rounded-lg text-gray-800 text-center my-2 ">
              Balance left: 234
            </p>
          </div>
          <div className="list_amount_parent">
            <div className=" mt-5 list_by_filter flex align-center justify-between">
              <span>Filter By:</span>
              <span>Dropdown</span>
            </div>
            <div className="all_lists_parent">
              <div className="listed_item flex align-center justify-between my-2 py-1.5 px-2 rounded-lg bg-blue-50">
                <p className="listed_item_name"></p>
                <p className="listed_item_price"> </p>
                <p className="listed_item_edit">
                  <i className="ri-edit-box-line"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
