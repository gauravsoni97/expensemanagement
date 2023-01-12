import React from "react";

const Main = () => {
  return (
    <div className="Main_Box">
      <div className="mainBox-leftside">
        <h2></h2>
        <form>
          <div className="inputfield">
            <label></label>
            <input type="month" placeholder="Jan-2023" />
          </div>
          <div className="inputfield">
            <label></label>
            <input type="number" placeholder="100000" />
          </div>

          <button type="submit">Manage Amount</button>
        </form>

        <div className="needs_wants_invest_parent">
          <i>50-30-20 Rule of Budgeting</i>
          <div className="split_in_needs_wants_invest">
            <div className="needs_from_salary">
              <p>50% on Needs: 5000</p>
            </div>
            <div className="wants_from_salary">
              <p>30% on Wants: 3000</p>
            </div>
            <div className="invest_from_salary">
              <p>20% on Invest: 2000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBox-rightside">
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
