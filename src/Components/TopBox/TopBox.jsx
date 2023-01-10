import React from "react";

import "./topbox.css";

const TopBox = () => {
  return (
    <div className="top_box shadow rounded p-4 flex align-center justify-start">
      <div className="topbox_leftside">
        <form>
          <div className="input_fields">
            <label className="input_label">Select Month</label>
            <input type="month" />
          </div>
          <div className="input_fields">
            <label className="input_label">Enter Per Month Salary</label>
            <input type="text" placeholder="100000" />
          </div>
          <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Green</button>

        </form>
      </div>
      <div className="topbox_rightside ">
        <h2 className="box_heading">50-30-20 Rule</h2>

        <div className="parentOfNeedsWantsInvest">
          <div className="AmountRecievedBox">
            <p className="needs_top_para"><b>50%</b> on Needs:</p>
            <div className="needs_top_amount  shadow  bg-green-100 ">1552</div>
          </div>
          <div className="AmountRecievedBox">
            <p className="wants_top_para"><b>30%</b>  on Wants:</p>
            <div className="needs_top_amount  shadow  bg-green-100 ">0</div>
          </div>
          <div className="AmountRecievedBox">
            <p className="invest_top_para"><b>20%</b>  on Invest:</p>
            <div className="needs_top_amount  shadow  bg-green-100 ">252</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBox;
