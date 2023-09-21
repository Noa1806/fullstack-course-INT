import {Link} from 'react-router-dom'
//import { useEffect, useState } from "react";
//import  {User}  from "./registerPage";
//import axios from 'axios';
import ProfileNavBar from '../components/profileNavBar/ProfileNavBar';
import "../style/dist/guestsPage.css"

function GuestsPage() {
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
        <div id="guests-page">
            <h1>Oops!</h1>
            <p>this page is still not ready.</p>
            <Link to='/addGuests' className="button-paper">Add your guests</Link>
        </div>
      </div>
    );
  }
  export default GuestsPage;