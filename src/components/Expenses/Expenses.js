import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

function Expenses(props) {
  const expenses = props.items;

  return (
    <Card className="expenses"> 
        {expenses.map( item =>
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date} 
          />
        )}
    </Card>
  );
}

export default Expenses;