import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import "../style/dist/expensesPage.css"
import ProfileNavBar from '../components/profileNavBar/ProfileNavBar';
import {Expense} from "./addExpensesPage"

function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    getExpensesOfUser();
  }, []);

  const getExpensesOfUser = async () => {
    try {
      const response = await axios.get("/api/expenses/get-expenses");
      const expenses = response.data.expenses;
      if (Array.isArray(expenses)) {
        setExpenses(expenses);
      }
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <div>
        <ProfileNavBar />
        <div id="expenses-page">
            <h1>Oops!</h1>
            <p>this page is still not ready.</p>
            <Link to='/addExpenses' className="button-paper">Add an expenses</Link>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Number Of Guets</th>
                  <th>Category</th>
                </tr>
              </thead>
              {expenses.map((expense) => (
              <tbody key={expense.name} >
                <tr>
                  <td>{expense.name}</td>
                  <td>{expense.supplier}</td>
                  <td>{expense.cost}</td>
                  <td>{expense.advancePayement}</td>
                  <td>{expense.expenseCategory}</td>
                </tr>
              </tbody>
              ))}
            </table>
        </div>
      </div>
    );
  }
  export default ExpensesPage;