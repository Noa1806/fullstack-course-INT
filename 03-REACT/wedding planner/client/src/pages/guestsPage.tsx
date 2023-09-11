//import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import '../style/dist/guests.css';

interface Guest {
    userId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    numberOfGuests: number;
    GuestType: string;
  }


 function GuestsPage() {
    
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function addGuest(ev: any) {
        try{
        ev.preventDefault();
          const userId = "";
          const firstName = ev.currentTarget.elements.firstName.value;
          if (!firstName) throw new Error("No first name");
          const lastName = ev.currentTarget.elements.lastName.value;
          if (!lastName) throw new Error("No last name");
          const phoneNumber = ev.currentTarget.elements.phoneNumber.value;
          if (!phoneNumber) throw new Error("No phone number");
          const numberOfGuests = ev.currentTarget.elements.numberOfGuests.value;
          if (!numberOfGuests) throw new Error("No Number of guests");
          const GuestType = ev.currentTarget.elements.guestCategory.value;
          if (!GuestType) throw new Error("No category");
          
      
          const user:Guest = {
            userId,
            firstName,
            lastName,
            phoneNumber,
            numberOfGuests,
            GuestType
          };

            const response = await axios.post("/api/users/add-user", user);
            const data = response.data;
            if (data.ok) navigate("/login");
            console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
      
  
  return (
        <div>
            <NavBar />
            <h2>Your Guests List</h2>
                <form className="add-guest-form" onSubmit={addGuest}>
                    <div className="input-container ic">
                        <input id="firstName" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="firstName" className="placeholder">First name</label>
                    </div>
                    <div className="input-container ic">
                        <input id="lastName" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="lastName" className="placeholder">Last name</label>
                    </div>
                    <div className="input-container ic">
                        <input id="phoneNumber" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="phoneNumber" className="placeholder">Phone number</label>
                    </div>
                    <div className="input-container ic">
                        <input id="numberOfGuests" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="numberOfGuests" className="placeholder">Number of guests</label>
                    </div>
                    <div className="input-container ic">
                        <input id="guestCategory" className="input" type="select" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="guestCategory" className="placeholder">Number of guests</label>
                    </div>
                    <input className="button-paper" type='submit' value={'Add your guest'} />
                </form>
            </div> 
    );
}

export default GuestsPage;