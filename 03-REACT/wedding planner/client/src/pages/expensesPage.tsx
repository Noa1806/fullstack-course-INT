import {Link} from 'react-router-dom'
import "../style/dist/expensesPage.css"
import ProfileNavBar from '../components/profileNavBar/ProfileNavBar';

function ExpensesPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    
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