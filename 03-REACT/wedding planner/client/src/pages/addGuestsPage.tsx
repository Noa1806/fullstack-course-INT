import axios from 'axios';
import { useEffect, useState } from "react";
import  {User}  from "./registerPage";
import { useNavigate } from 'react-router-dom';
import ProfileNavBar from '../components/profileNavBar/ProfileNavBar';
import '../style/dist/addGuests.css';

interface Guest {
    userId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    numberOfGuests: number;
    GuestType: string;
  }


 function AddGuestsPage() {

    
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

    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function addGuest(ev: any) {
        try{
        ev.preventDefault();
          const userId = user?._id;
          if (!userId) throw new Error("No Id");
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
          
      
          const guest:Guest = {
            userId,
            firstName,
            lastName,
            phoneNumber,
            numberOfGuests,
            GuestType
          };

            const response = await axios.post("/api/users/add-user", guest);
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
                        <input id="numberOfGuests" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="numberOfGuests" className="placeholder">Number of guests</label>
                    </div>
                    <div className="input-container ic">
                        <select required id="guestCategory" className="input" name="guestTypes">
                            <option value={''} hidden>Guest Category</option>
                            <option value={'bride family'}>Bride family</option>
                            <option value={'bride friends'}>Bride friends</option>
                            <option value={'groom family'}>Groom family</option>
                            <option value={'groom family'}>Groom family</option>
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