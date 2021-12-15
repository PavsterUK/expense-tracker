import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filterYear.toString()
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultFilterYear={filterYear}
          onFilterYearSelected={filterChangeHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
