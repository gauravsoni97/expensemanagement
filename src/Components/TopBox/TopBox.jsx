import React, { useState } from "react";

import "./topbox.css";

let fiftyPercent = 50;
let thirtyPercent = 30;
let twentyPercent = 20;

const TopBox = () => {
  const [initialSalaryAmount, setInitialSalaryAmount] = useState(0);

  const [fiftyPercentAmount, setFiftyPercentAmount] = useState(0);
  const [thirtyPercentAmount, setthirtyPercentAmount] = useState(0);
  const [twentyPercentAmount, settwentyPercentAmount] = useState(0);

  const handleInitailSalaryAmount = (e) => {
    setInitialSalaryAmount(e.target.value);
  };

  const handleTopForm = (e) => {
    e.preventDefault();

    setFiftyPercentAmount((fiftyPercent / 100) * initialSalaryAmount);
    setthirtyPercentAmount((thirtyPercent / 100) * initialSalaryAmount);
    settwentyPercentAmount((twentyPercent / 100) * initialSalaryAmount);
  };

  return (
    <div className="top_box shadow rounded p-4 flex align-center justify-start">
      <div className="topbox_leftside">
        <form onSubmit={handleTopForm}>
          <div className="input_fields">
            <label className="input_label">Select Month</label>
            <input type="month" />
          </div>
          <div className="input_fields">
            <label className="input_label">Enter Per Month Salary</label>
            <input
              type="number"
              placeholder="100000"
              value={initialSalaryAmount}
              onChange={handleInitailSalaryAmount}
            />
          </div>
          <button
            type="submit"
            class=" w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Manage Money
          </button>
        </form>
      </div>
      <div className="topbox_rightside ">
        <h2 className="box_heading">50-30-20 Rule</h2>

        <div className="parentOfNeedsWantsInvest">
          <div className="AmountRecievedBox">
            <p className="needs_top_para">
              <b>50%</b> on Needs:
            </p>
            <div className="needs_top_amount  shadow  bg-green-100 ">
              {fiftyPercentAmount}
            </div>
          </div>
          <div className="AmountRecievedBox">
            <p className="wants_top_para">
              <b>30%</b> on Wants:
            </p>
            <div className="needs_top_amount  shadow  bg-green-100 ">
              {thirtyPercentAmount}
            </div>
          </div>
          <div className="AmountRecievedBox">
            <p className="invest_top_para">
              <b>20%</b> on Invest:
            </p>
            <div className="needs_top_amount  shadow  bg-green-100 ">
              {twentyPercentAmount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBox;
