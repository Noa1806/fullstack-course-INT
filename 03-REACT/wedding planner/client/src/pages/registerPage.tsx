import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import '../style/dist/register.css';
//import { create } from 'domain';

interface User {
    nameOfBride: string;
    nameOfGroom: string;
    weddingDate: Date;
    username: string;
    password: string;
  }

function RegisterPage() {

    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function createUser(ev: any) {
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
      
          const user:User = {
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
        <form className="form" onSubmit={createUser}>
          <div className="title">Welcome</div>
          <div className="subtitle">Let's create your account!</div>
          <div className="input-container ic">
            <input id="brideName" className="input" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="brideName" className="placeholder">Bride name</label>
          </div>
          <div className="input-container ic">
            <input id="groomName" className="input" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="groomName" className="placeholder">Groom name</label>
          </div>
          <div className="input-container ic">
            <input id="WeddingDate" className="input" type="date" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="WeddingDate" className="placeholder">Wedding date</label>
          </div>
          <div className="input-container ic">
            <input id="username" className="input" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="username" className="placeholder">User name</label>
          </div>
          <div className="input-container ic">
            <input id="password" className="input" type="password" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor="password" className="placeholder">Password</label>
          </div>
          <input className="button-paper" type='submit' value={'Create your account'} />
          <br />
          <Link to='/login'><span>Already have an account? </span>Sign in here!</Link>
        </form>
     
    </div>
    );
}

export default RegisterPage;