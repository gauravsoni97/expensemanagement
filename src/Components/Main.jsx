import React, { useState } from "react";
import ExpenseListRight from "./ExpenseListRight/ExpenseListRight";
import "./Main.css";
import SalaryBoxLeft from "./SalaryBoxLeft/SalaryBoxLeft";

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

  const [listItem, setListItem] = useState([]);

  const addListItem = (nameOfItem, priceOfItem) => {
    setListItem((prevVal) => {
      return [...prevVal, { name: nameOfItem, price: priceOfItem }];
    });
  };

  const [addNeeds, setAddNeeds] = useState({
    name: "",
    price: "",
  });

  // const [addWants, setAddWants] = useState();
  // const [addInvest, setAddInvest] = useState();


const [balance, setBalance] = useState(0)

const balanceLeft = () =>{

}


  // ----- left side form handler

  const handleSalary = (e) => {
    e.preventDefault();
    setNeedsAmountFromSalary(Math.round((fiftyPercent / 100) * salaryInput));
    setWantsAmountFromSalary(Math.round((thirtyPercent / 100) * salaryInput));
    setInvestAmountFromSalary(Math.round((twentyPercent / 100) * salaryInput));
    setSalaryInput("");
    setBalance(needsAmountFromSalary);
  };

  // right side form

  const handleBudgetForm = (e) => {
    e.preventDefault();
    setAddNeeds({ name: "", price: "" });
    addListItem(addNeeds.name, addNeeds.price);
  };


  // on delete list  from lists of Array 

  const onDeleteListItem = (ind) => {
    const updatedList = listItem.filter((currVal, currInd) => {
      return ind !== currInd;
    });
    setListItem(updatedList);
  };

  
  return (
    <div className="Main_Box flex align-start justify-start flex-wrap  bg-white rounded-xl">
      <SalaryBoxLeft
        handleSalary={handleSalary}
        salaryInput={salaryInput}
        setSalaryInput={setSalaryInput}
        needsAmountFromSalary={needsAmountFromSalary}
        wantsAmountFromSalary={wantsAmountFromSalary}
        investAmountFromSalary={investAmountFromSalary}
      />
      {/* ------------------------- Right Side --------------------- */}
      <ExpenseListRight
        handleBudgetForm={handleBudgetForm}
        addNeeds={addNeeds}
        setAddNeeds={setAddNeeds}
        listItem={listItem}
        onDeleteListItem={onDeleteListItem}
        balance={balance}
      />
    </div>
  );
};

export default Main;
