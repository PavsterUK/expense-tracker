import React, { useState }  from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";

function Expenses(props) {
  const expenses = props.items;
  const [filterYear, setFilterYear] = useState("2020");

  const onFilterYearSelected = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter defaultFilterYear={filterYear} onFilterYearSelected={onFilterYearSelected} />
        {expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
