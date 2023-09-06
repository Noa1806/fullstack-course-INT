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
          const nameOfBride = ev.currentTarget.elements.nameOfBride.value;
          if (!nameOfBride) throw new Error("No name of bride");
          const nameOfGroom = ev.currentTarget.elements.nameOfGroom.value;
          if (!nameOfGroom) throw new Error("No name of groom");
          const weddingDate = ev.currentTarget.elements.weddingDate.value;
          if (!weddingDate) throw new Error("No wedding date");
          const username = ev.currentTarget.elements.username.value;
          if (!username) throw new Error("No usrname");
          const password = ev.currentTarget.elements.password.value;
          if (!password) throw new Error("No Password");
      
          const user:Guest = {
            nameOfBride,
            nameOfGroom,
            weddingDate,
            username,
            password
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
                    <div className="add-guest-form__input">
                        <h4>First Name</h4>
                        <input type="text" placeholder="Guest's first name..."/>
                    </div>
                    <div className="add-guest-form__input">
                        <h4>Last Name</h4>
                        <input type="text" placeholder="Guest's last name..."/>
                    </div>
                    <div className="add-guest-form__input">
                        <h4>Phone Number</h4>
                        <input type="text" placeholder="Guest's phone number..."/>
                    </div>
                    <div className="add-guest-form__input">
                        <h4>Number Of Guests</h4>
                        <input type="text" placeholder="Number of guests..."/>
                    </div>
                    <div className="add-guest-form__input">
                        <h4>Guest Category</h4>
                        <input type="text" placeholder="List of category..."/>
                    </div>
                    <button type="submit" className="btn">Add To Your List</button>
                </form>
            </div> 
    );
}

export default GuestsPage;