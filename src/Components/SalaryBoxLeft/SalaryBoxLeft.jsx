import React from "react";

const SalaryBoxLeft = ({
  handleSalary,
  salaryInput,
  setSalaryInput,
  needsAmountFromSalary,
  wantsAmountFromSalary,
  investAmountFromSalary,
}) => {
  return (
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
          className=" w-full text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Manage Amount
        </button>
      </form>

      <div className="needs_wants_invest_parent mt-6">
        <i>50-30-20 Rule of Budgeting</i>
        <div className="split_in_needs_wants_invest">
          <div className="needs_from_salary bg-[#FFFBEC] my-5 rounded-xl p-4">
            <p>50% on Needs: {needsAmountFromSalary}</p>
          </div>
          <div className="wants_from_salary bg-[#FFFBEC] my-5 rounded-xl p-4">
            <p>30% on Wants: {wantsAmountFromSalary} </p>
          </div>
          <div className="invest_from_salary bg-[#FFFBEC] my-5 rounded-xl p-4">
            <p>20% on Invest: {investAmountFromSalary} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryBoxLeft;
