import {Link} from 'react-router-dom'
//import { useEffect, useState } from "react";
//import axios from 'axios';
import "../style/dist/expensesPage.css"
import ProfileNavBar from '../components/profileNavBar/ProfileNavBar';

function ExpensesPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    /*
  const [user, setuser] = useState<User>();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await axios.get("/api/users/getUserById");
      const userDB = response.data.user;
      setuser(userDB);
    } catch (error) {
      console.error(error);
    }
  };
*/
    return (
        <div>
        <ProfileNavBar />
        <div id="expenses-page">
            <h1>Oops!</h1>
            <p>this page is still not ready.</p>
            <Link to='/addExpenses' className="button-paper">Add an expenses</Link>
        </div>
      </div>
    );
  }
  export default ExpensesPage;