import React, {useState} from "react";
import "./ExpensesFilter.css";

const ExpenseFilter = (props) => {

  const [selected, setSelected] = useState();

  const selectHandler = () => {
    setSelected(selected)
    console.log(selected)
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label for="years">Filter by Year:</label>
        <select value={selected} onChange={selectHandler}>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
