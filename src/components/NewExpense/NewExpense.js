import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    closeNewExpenseForm();
  }

  const openNewExpenseForm = () => (
    setIsOpen(true)
  );

  const closeNewExpenseForm = () => (
    setIsOpen(false)
  );

  return (
    <div className="new-expense">
      { !isOpen && <button type="button" onClick={openNewExpenseForm}>Add New Expense</button>}
      { isOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm={closeNewExpenseForm}/>}
    </div>
  );
};

export default NewExpense;