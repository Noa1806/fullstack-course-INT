/* eslint-disable react-hooks/rules-of-hooks */
//import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

          const {data} = await axios.post('/api/users/login', userLogin);
          const { ok } = data;
          if (ok) {
            navigate("/main")
          }
      } catch (error) {
        console.error(error);
      }
    }
  
  return (
    <div id='login-page'>
      <div className='logIn-form'>
        <h2>Login</h2>
        <form className='log-in-form' onSubmit={login}>
            <div className='log-in-form__input'>
                <h4>Username</h4>
                <input type='text' name='username' placeholder='Username...' required/>
            </div>
            <div className='log-in-form__input'>
                <h4>Password</h4>
                <input type='password' name='password' placeholder='Password...' required/>
            </div>
            <button type='submit' className='btn'>Login</button>
        </form>
    </div>
    <Link to='/register'><span className='noLink'>Not registred?</span>Create an account!</Link>

    </div>
  );
}

export default LoginPage;