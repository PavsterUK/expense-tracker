import React from "react";
import "./ExpensesFilter.css";

const ExpenseFilter = (props) => {
  const selectHandler = (event) => {
    props.onFilterYearSelected(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label for="years">Filter by Year:</label>
        <select defaultValue={props.defaultFilterYear} onChange={selectHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
