import React from "react";
import "./Main.css"
const Main = () => {
  return (
    <div className="Main_Box flex align-start justify-start flex-wrap  bg-white rounded-xl">
      <div className="mainBox-leftside bg-[#FFE0CA] rounded-xl  p-3 ">
        <h2 className="mainheading_topleft">Per Month Expenses</h2>
        <form>
          <div className="inputfield">
            <label>Select Month</label>
            <input type="month" placeholder="Jan-2023" />
          </div>
          <div className="inputfield">
            <label>Monthly Salary</label>
            <input type="number" placeholder="100000" />
          </div>

          <button type="submit" class=" w-full text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Manage Amount</button>
        </form>

        <div className="needs_wants_invest_parent mt-6">
          <i>50-30-20 Rule of Budgeting</i>
          <div className="split_in_needs_wants_invest">
            <div className="needs_from_salary bg-[#FFFBEC] my-2 rounded p-3">
              <p>50% on Needs: 5000</p>
            </div>
            <div className="wants_from_salary bg-[#FFFBEC] my-2 rounded p-3">
              <p>30% on Wants: 3000</p>
            </div>
            <div className="invest_from_salary bg-[#FFFBEC] my-2 rounded p-3">
              <p>20% on Invest: 2000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBox-rightside p-3 ">
        <div className="filter_box">
          <span>Filter By:</span>
          <span> Needs - dropdown</span>
        </div>

        <div className="input_amount_form_section">
          <form>
            <div className="inputfield">
              <label></label>
              <input type="text" placeholder="Jan-2023" />
            </div>
            <div className="inputfield">
              <label>Enter Amount</label>
              <input type="number" placeholder="10000" />
            </div>
            <button type="submit">Use Amount</button>
          </form>
          <div className="balence_left_box">
            <p>
              <i>Balance Left: 243</i>
            </p>
          </div>
          <div className="list_amount_parent">
            <div className="list_by_filter">
              <span>Filter By:</span>
              <span>Dropdown</span>
            </div>
            <div className="all_lists_parent">
                <div className="listed_item">
                    <p className="listed_item_name"></p>
                    <p className="listed_item_price"></p>
                    <p className="listed_item_edit"></p>
                </div>
                <div className="listed_item">
                    <p className="listed_item_name"></p>
                    <p className="listed_item_price"></p>
                    <p className="listed_item_edit"></p>
                </div>
                <div className="listed_item">
                    <p className="listed_item_name"></p>
                    <p className="listed_item_price"></p>
                    <p className="listed_item_edit"></p>
                </div>
                <div className="listed_item">
                    <p className="listed_item_name"></p>
                    <p className="listed_item_price"></p>
                    <p className="listed_item_edit"></p>
                </div>
                <div className="listed_item">
                    <p className="listed_item_name"></p>
                    <p className="listed_item_price"></p>
                    <p className="listed_item_edit"></p>
                </div>
                <div className="listed_item">
                    <p className="listed_item_name"></p>
                    <p className="listed_item_price"></p>
                    <p className="listed_item_edit"></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
