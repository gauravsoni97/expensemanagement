import React, { useState } from "react";
import ExpenseListRight from "./ExpenseListRight/ExpenseListRight";
import "./Main.css";
import SalaryBoxLeft from "./SalaryBoxLeft/SalaryBoxLeft";

let fiftyPercent = 50;
let thirtyPercent = 30;
let twentyPercent = 20;

const Main = () => {
  // left side states ------------------
  // const [salaryInput, setSalaryInput] = useState();
  // const [needsAmountFromSalary, setNeedsAmountFromSalary] = useState(0);
  // const [wantsAmountFromSalary, setWantsAmountFromSalary] = useState(0);
  // const [investAmountFromSalary, setInvestAmountFromSalary] = useState(0);

  // right side states --------------

  // const [listItem, setListItem] = useState([]);

  // const addListItem = (nameOfItem, priceOfItem) => {
  //   setListItem((prevVal) => {
  //     return [...prevVal, { name: nameOfItem, price: priceOfItem }];
  //   });
  // };

  // const [addNeeds, setAddNeeds] = useState({
  //   name: "",
  //   price: "",
  // });

  // const [addWants, setAddWants] = useState();
  // const [addInvest, setAddInvest] = useState();



  // const [filter, setFilter] = useState("needs"); 
  // const [monthFilter, setMonthFilter] = useState("jan"); 


  
  // ----- left side form handler

  // const handleSalary = (e) => {
  //   e.preventDefault();
  //   setNeedsAmountFromSalary(Math.round((fiftyPercent / 100) * salaryInput));
  //   setWantsAmountFromSalary(Math.round((thirtyPercent / 100) * salaryInput));
  //   setInvestAmountFromSalary(Math.round((twentyPercent / 100) * salaryInput));
  //   setSalaryInput("");
  // };

  // // right side form

  // const handleBudgetForm = (e) => {
  //   e.preventDefault();
  //   setAddNeeds({ name: "", price: "" });
  //   addListItem(addNeeds.name, addNeeds.price);
  // };

  // // on delete list  from lists of Array

  // const onDeleteListItem = (ind) => {
  //   const updatedList = listItem.filter((currVal, currInd) => {
  //     return ind !== currInd;
  //   });
  //   setListItem(updatedList);
  // };


  // -----------------------------------------------------------------------------------------------------------------------
  // --------------------------------------( After using FORMIK WITH YUP )----------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------------



  return (
    <div className="Main_Box flex align-start justify-start flex-wrap  bg-white rounded-xl">
      {/* <SalaryBoxLeft
        handleSalary={handleSalary}
        salaryInput={salaryInput}
        setSalaryInput={setSalaryInput}
        needsAmountFromSalary={needsAmountFromSalary}
        wantsAmountFromSalary={wantsAmountFromSalary}
        investAmountFromSalary={investAmountFromSalary}
      /> */}
      {/* ------------------------- Right Side --------------------- */}
      {/* <ExpenseListRight
        handleBudgetForm={handleBudgetForm}
        addNeeds={addNeeds}
        setAddNeeds={setAddNeeds}
        listItem={listItem}
        onDeleteListItem={onDeleteListItem}
        needsAmountFromSalary={needsAmountFromSalary}
        filter={filter}
        setFilter={setFilter}
        monthFilter={monthFilter}
        setMonthFilter={setMonthFilter}
      /> */}




{/* =============================================================================================== */}
{/* ========================================== After formik with yup ============================== */}
{/* =============================================================================================== */}


{/* left side  */}

<div className="mainBox-leftside bg-[#FFE0CA] rounded-xl  p-3 ">
      <h2 className="mainheading_topleft">Expense Management</h2>
      <form >
        <div className="inputfield">
          <label>Select Month</label>
          <input type="month" placeholder="Jan-2023" />
        </div>
        <div className="inputfield">
          <label>Monthly Salary</label>
          <input
            type="number"
            placeholder="100000"
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
            <p>50% on Needs: </p>
          </div>
          <div className="wants_from_salary bg-[#FFFBEC] my-5 rounded-xl p-4">
            <p>30% on Wants:  </p>
          </div>
          <div className="invest_from_salary bg-[#FFFBEC] my-5 rounded-xl p-4">
            <p>20% on Invest:</p>
          </div>
        </div>
      </div>
    </div>


    {/* right side  */}


    {/* <div className="mainBox-rightside p-3 ">
      <div className="filter_box">
        <div>Filter By:</div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="needs">Needs</MenuItem>
              <MenuItem value="wants">Wants</MenuItem>
              <MenuItem value="invest">Invest</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="input_amount_form_section">
        <form onSubmit={handleBudgetForm}>
          <div className="inputfield inputfield_rightside">
            <label>Enter Name</label>
            <input
              type="text"
              placeholder="Sugar"
              value={addNeeds.name}
              onChange={(e) =>
                setAddNeeds({ ...addNeeds, name: e.target.value })
              }
            />
          </div>
          <div className="inputfield inputfield_rightside">
            <label>Enter Amount</label>
            <input
              type="number"
              placeholder="10000"
              value={addNeeds.price}
              onChange={(e) =>
                setAddNeeds({ ...addNeeds, price: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className=" w-full text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Use Amount
          </button>
        </form>
        <div className="balence_left_box ">
          <p className=" w-full bg-red-50 p-2 rounded-lg text-gray-800 text-center my-2 ">
            Balance left: {needsAmountFromSalary}
          </p>
        </div>
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
            {listItem.length > 0 &&
              listItem.map((e, ind) => {
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
 */}



    </div>
  );
};

export default Main;
