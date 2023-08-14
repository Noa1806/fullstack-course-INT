//import { Link } from 'react-router-dom';


function ExpensesPage() {
  
    return (
        <div>
        <h2>Your Wedding Expenses</h2>
        <form className='add-expense-form' onsubmit='AddExpense(event)'>
            <div className='add-expense-form__input'>
                <h4>Expense</h4>
                <input type='text' placeholder='Lable...'/>
            </div>
            <div className='add-expense-form__input'>
                <h4>Expense's Supplier</h4>
                <input type='text' placeholder='Supplier...'/>
            </div>
            <div className='add-expense-form__input'>
                <h4>Expense's cost</h4>
                <input type='text' placeholder='Cost...'/>
            </div>
            <div className='add-expense-form__input'>
                <h4>Expense's advance payement</h4>
                <input type='number' placeholder='Advance payement../ If none type "0"'/>
            </div>
            <div className='add-expense-form__input'>
                <h4>Expense's Category</h4>
                <input type='text' placeholder='List of category...'/>
            </div>
            <button type='submit' className='btn'>Add To Your List</button>
        </form>
        </div>
    );
}

export default  ExpensesPage