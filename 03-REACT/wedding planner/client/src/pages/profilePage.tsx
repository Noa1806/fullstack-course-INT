import '../style/dist/profile.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import  {User}  from "./registerPage";
import axios from 'axios';
import ProfileNavBar from '../components/profileNavBar/ProfileNavBar';


function ProfilePage() {
  
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

  return (
    <div id="profile-page">
      <ProfileNavBar /> 
      <h1>Profile page! <br /> Still not ready</h1>
      <h2>Welcome</h2>
      <h2>{user?.nameOfBride} and {user?.nameOfGroom}</h2>
      <Link to='/guests' className="button-paper">Your guest</Link>
      <Link to='/expenses' className="button-paper">Your expenses</Link>
    </div>
  );
}
export default ProfilePage;



 
