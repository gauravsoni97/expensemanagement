import React from "react";

const LeftSide = ({
  incomeForm,
  splitAmounts,
  handleNeedsForm,
  handleWantsForm,
  handleInvestForm,
}) => {
  return (
    <>
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
    </>
  );
};

export default LeftSide;
