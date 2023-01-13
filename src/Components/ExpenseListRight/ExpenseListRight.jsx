import React from "react";

const ExpenseListRight = ({
  handleBudgetForm,
  addNeeds,
  setAddNeeds,
  listItem,
  onDeleteListItem,
}) => {
  return (
    <div className="mainBox-rightside p-3 ">
      <div className="filter_box  flex align-center justify-between my-4">
        <span>Filter By:</span>
        <span> Needs - dropdown</span>
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
            Balance left: 234
          </p>
        </div>
        <div className="list_amount_parent">
          <div className=" mt-5 list_by_filter flex align-center justify-between">
            <span>Filter By:</span>
            <span>Dropdown</span>
          </div>
          <div className="all_lists_parent">
            {listItem?.map((e, ind) => {
              return (
                <div
                  className="listed_item flex align-center justify-between my-2 py-1.5 px-2 rounded-lg bg-blue-50"
                  key={ind}
                >
                  <p className="listed_item_name">{e.name}</p>
                  <p className="listed_item_price">{e.price}</p>
                  <p className="listed_item_edit">
                    <i
                      className="ri-edit-box-line"
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
  );
};

export default ExpenseListRight;
