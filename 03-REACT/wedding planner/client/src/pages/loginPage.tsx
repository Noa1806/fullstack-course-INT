/* eslint-disable react-hooks/rules-of-hooks */
//import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import '../style/dist/login.css';

const LoginPage= ()  => {

    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function login(ev: any) {
      try {
        ev.preventDefault();
        const username = ev.target.elements.username.value;
        const password = ev.target.elements.password.value;
        
        if (!username) throw new Error('No usename');
        if (!password) throw new Error('No Password');

        const userLogin = {username, password };

          const response = await axios.post("/api/users/login", userLogin);
          const data = response.data;
          if (data.ok) 
            navigate("/profile", {state:username});
          else alert("Your username or password must be wrong");
      } catch (error) {
        console.error(error);
      }
    }
  
  return (
    <div>

    <NavBar />
    <form className="form" onSubmit={login}>
      <div className="title">Welcome</div>
      <div className="subtitle">Log in to your account!</div>
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
      <input className="button-paper" type='submit' value={'Log to your account'} />
      <br /> 
      <Link to='/register'><span className='noLink'>Not registred?</span>Create an account!</Link>
    </form>

            
</div>
    
  );
}

export default LoginPage;