import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProfileNavBar from '../components/profileNavBar/ProfileNavBar';
import '../style/dist/addGuests.css';

export interface Guest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    numberOfGuests: number;
    guestType: string;
  }


 function AddGuestsPage() {

    
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function addGuest(ev: any) {
        try{
        ev.preventDefault();
          const firstName = ev.currentTarget.elements.firstName.value;
          if (!firstName) throw new Error("No first name");
          const lastName = ev.currentTarget.elements.lastName.value;
          if (!lastName) throw new Error("No last name");
          const phoneNumber = ev.currentTarget.elements.phoneNumber.value;
          if (!phoneNumber) throw new Error("No phone number");
          const numberOfGuests = ev.currentTarget.elements.numberOfGuest.value;
          if (!numberOfGuests) throw new Error("No Number of guests");
          const guestType = ev.currentTarget.elements.guestTypes.value;
          if (!guestType) throw new Error("No category");
          
      
          const guest:Guest = {
            firstName,
            lastName,
            phoneNumber,
            numberOfGuests,
            guestType
          };

            const response = await axios.post("/api/guests/add-guest", guest);
            const data = response.data;
            if (data.ok) navigate("/guests");
            console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
      
  
  return (
        <div>
            <ProfileNavBar />
                <form className="form" onSubmit={addGuest}>
                    <h2>Add Your Guests To The List</h2>
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
                        <input id="numberOfGuests" className="input" type="number" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="numberOfGuests" className="placeholder">Number of guests</label>
                    </div>
                    <div className="input-container ic">
                        <select required id="guestCategory" className="input" name="guestTypes">
                            <option value={''} hidden>Guest Category</option>
                            <option value={'bride family'}>Bride family</option>
                            <option value={'bride friends'}>Bride friends</option>
                            <option value={'groom family'}>Groom family</option>
                            <option value={'groom friends'}>Groom friends</option>
                        </select>
                        <div className="cut"></div>
                        <label htmlFor="guestCategory" className="placeholder">Guest category</label>
                    </div>
                    <input className="button-paper" type='submit' value={'Add your guest'} />
                </form>
            </div> 
    );
}

export default AddGuestsPage;