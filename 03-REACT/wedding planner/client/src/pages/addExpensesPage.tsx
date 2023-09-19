//import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProfileNavBar from '../components/profileNavBar/ProfileNavBar';
import '../style/dist/addExpenses.css';

interface Expense {
    userId: string;
    name: string;
    supplier: string;
    cost: number;
    advancePayement: number;
    ExpenseCategory:string;
  }


 function AddExpensesPage() {
    
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function addExpense(ev: any) {
        try{
        ev.preventDefault();
          const userId = "";
          const name = ev.currentTarget.elements.expense.value;
          if (!name) throw new Error("No name");
          const supplier = ev.currentTarget.elements.supplier.value;
          if (!supplier) throw new Error("No supplier");
          const cost = ev.currentTarget.elements.cost.value;
          if (!cost) throw new Error("No cost");
          const advancePayement = ev.currentTarget.elements.advancePayement.value;
          if (!advancePayement) throw new Error("No advance payement");
          const ExpenseCategory = ev.currentTarget.elements.expenseCategory.value;
          if (!ExpenseCategory) throw new Error("No category");
          
      
          const user:Expense = {
            userId,
            name,
            supplier,
            cost,
            advancePayement,
            ExpenseCategory
          };

            const response = await axios.post("/api/users/add-user", user);
            const data = response.data;
            if (data.ok) navigate("/main");
            console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
      
  
  return (
        <div>
            <ProfileNavBar />
                <form className="form" onSubmit={addExpense}>
                    <h2>Write down Your Expense For The Wedding</h2>
                    <div className="input-container ic">
                        <input id="expense" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="expense" className="placeholder">Expense name</label>
                    </div>
                    <div className="input-container ic">
                        <input id="supplier" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="supplier" className="placeholder">Supplier</label>
                    </div>
                    <div className="input-container ic">
                        <input id="cost" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="cost" className="placeholder">Cost</label>
                    </div>
                    <div className="input-container ic">
                        <input id="advancePayement" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="advancePayement" className="placeholder">Advance Payement</label>
                    </div>
                    <div className="input-container ic">
                        <select required id="expenseCategory" className="input" name="guestTypes">
                            <option value={''} hidden>Expense Category</option>
                            <option value={'bride'}>For The Bride</option>
                            <option value={'groom'}>For The Groom</option>
                            <option value={'ceremony'}>For The Ceremony</option>
                            <option value={'party'}>For The Party</option>
                            <option value={'other'}>Other</option>
                        </select>
                        <div className="cut"></div>
                        <label htmlFor="expenseCategory" className="placeholder">Expense category</label>
                    </div>
                    <input className="button-paper" type='submit' value={'Add your expense'} />
                </form>
            </div> 
    );
}

export default AddExpensesPage;

