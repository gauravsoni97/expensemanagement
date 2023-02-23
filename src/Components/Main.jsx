import { useFormik, validateYupSchema } from "formik";
import React, { useState } from "react";
import emptystatehome from "../Imgs/emptystatehome2.png";
import * as Yup from "yup";

import "./Main.css";
import { useEffect } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Main = () => {
  const [splitAmounts, setSplitAmounts] = useState(
    JSON.parse(localStorage.getItem("splitAmounts")) || {
      needs: 0,
      wants: 0,
      invest: 0,
    }
  );

  // ================================================================ Right side states

  const [formVisible, setFormVisible] = useState(-1);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const [arrayOfWants, setArrayOfWants] = useState(
    JSON.parse(localStorage.getItem("wantsArray")) || []
  );
  const [arrayOfInvest, setArrayOfInvest] = useState(
    JSON.parse(localStorage.getItem("investArray")) || []
  );

  // --------------------------------------------------------------------

  const [arrayOfNeeds, setArrayOfNeeds] = useState(
    JSON.parse(localStorage.getItem("needsArray")) || []
  );

  const [filteredNeedsArray, setFilteredNeedsArray] = useState([]);

  const handleMonthFilter = (e) => {
    setSelectedMonth(e.target.value);
    const splitArrayOfNeeds = arrayOfNeeds.filter((ele) => {
      const month = Math.floor(parseInt(ele.pickedDate.split("-")[1]));
      return month === e.target.value;
    });

    setFilteredNeedsArray(splitArrayOfNeeds);
  };

  console.log(filteredNeedsArray + " this is filtered array");

  console.log(selectedMonth + " selected Month from dropdown");

  // ----------------------------------------------------------------------------------------------------

  const incomeForm = useFormik({
    initialValues: { income: "" },

    validationSchema: Yup.object({
      income: Yup.number()
        .max(1000000000000, "Enter amount less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
      setSplitAmounts({
        needs: values.income * 0.5,
        wants: values.income * 0.3,
        invest: values.income * 0.2,
      });
      incomeForm.resetForm();
    },
  });

  // ========================================================== Right side forms ================================

  // needs input form

  const needsForm = useFormik({
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
        .max(1000000000000, "Enter income less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
      setArrayOfNeeds((preval) => {
        return [
          {
            pickedDate: values.itemDate,
            name: values.itemName,
            price: values.itemPrice,
          },
          ...preval,
        ];
      });
      needsForm.resetForm();
    },
  });

  const wantsForm = useFormik({
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
        .max(1000000000000, "Enter income less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
      setArrayOfWants((preval) => {
        return [
          {
            pickedDate: values.itemDate,
            name: values.itemName,
            price: values.itemPrice,
          },
          ...preval,
        ];
      });
      wantsForm.resetForm();
    },
  });

  const investForm = useFormik({
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
        .max(1000000000000, "Enter income less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
      setArrayOfInvest((preval) => {
        return [
          {
            pickedDate: values.itemDate,
            name: values.itemName,
            price: values.itemPrice,
          },
          ...preval,
        ];
      });
      investForm.resetForm();
    },
  });

  const handleNeedsForm = () => setFormVisible(0);
  const handleWantsForm = () => setFormVisible(1);
  const handleInvestForm = () => setFormVisible(2);

  let needsTotalListSum = arrayOfNeeds
    .map((obj) => obj.price)
    .reduce((acc, cur) => acc + cur, 0);
  let wantsTotalListSum = arrayOfWants
    .map((obj) => obj.price)
    .reduce((acc, cur) => acc + cur, 0);
  let investTotalListSum = arrayOfInvest
    .map((obj) => obj.price)
    .reduce((acc, cur) => acc + cur, 0);

  // on delete list item from list

  const deleteNeedsFromList = (curInd) => {
    const updatedList = arrayOfNeeds.filter((ele, arrInd) => {
      return arrInd !== curInd;
    });
    setArrayOfNeeds(updatedList);
  };
  const deleteWantsFromList = (curInd) => {
    const updatedList = arrayOfWants.filter((ele, arrInd) => {
      return arrInd !== curInd;
    });
    setArrayOfWants(updatedList);
  };
  const deleteInvestFromList = (curInd) => {
    const updatedList = arrayOfInvest.filter((ele, arrInd) => {
      return arrInd !== curInd;
    });
    setArrayOfInvest(updatedList);
  };

  // ================================================ use Effects ==============================

  useEffect(() => {
    localStorage.setItem("splitAmounts", JSON.stringify(splitAmounts));
  }, [splitAmounts]);

  // -------------- use effects for  right side forms -----------------

  useEffect(() => {
    localStorage.setItem("needsArray", JSON.stringify(arrayOfNeeds));
  }, [arrayOfNeeds]);

  useEffect(() => {
    localStorage.setItem("wantsArray", JSON.stringify(arrayOfWants));
  }, [arrayOfWants]);

  useEffect(() => {
    localStorage.setItem("investArray", JSON.stringify(arrayOfInvest));
  }, [arrayOfInvest]);

  useEffect(() => {
    const splitArrayOfNeeds = arrayOfNeeds.filter((ele) => {
      const month = Math.floor(parseInt(ele.pickedDate.split("-")[1]));
      return month === new Date().getMonth() + 1;
    });

    setFilteredNeedsArray(splitArrayOfNeeds);
  }, []);

  return (
    <div className="Main_Box flex align-start justify-start flex-wrap  bg-white rounded-xl">
      <LeftSide
        incomeForm={incomeForm}
        splitAmounts={splitAmounts}
        handleNeedsForm={handleNeedsForm}
        handleWantsForm={handleWantsForm}
        handleInvestForm={handleInvestForm}
      />
      <RightSide
        splitAmounts={splitAmounts}
        formVisible={formVisible}
        needsTotalListSum={needsTotalListSum}
        wantsTotalListSum={wantsTotalListSum}
        investTotalListSum={investTotalListSum}
        needsForm={needsForm}
        wantsForm={wantsForm}
        investForm={investForm}
        selectedMonth={selectedMonth}
        handleMonthFilter={handleMonthFilter}
        arrayOfNeeds={arrayOfNeeds}
        arrayOfWants={arrayOfWants}
        arrayOfInvest={arrayOfInvest}
        filteredNeedsArray={filteredNeedsArray}
        deleteNeedsFromList={deleteNeedsFromList}
        deleteWantsFromList={deleteWantsFromList}
        deleteInvestFromList={deleteInvestFromList}
        emptystatehome={emptystatehome}
      />

    </div>
  );
};

export default Main;
