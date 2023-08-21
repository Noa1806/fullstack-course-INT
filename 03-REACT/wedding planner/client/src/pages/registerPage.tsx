import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        <h2>Sign Up</h2>
        <form className="sign-up-form" onSubmit={createUser}>
            
                <h4 className="sign-up-form__lable">Name Of The Bride</h4>
                <input className="sign-up-form__input" type="text" name="nameOfBride" placeholder="Bride's name..." required/>                

                <h4 className="sign-up-form__lable">Name Of The Groom</h4>
                <input className="sign-up-form__input" type="text" name="nameOfGroom" placeholder="Groom's name..." required/>
            
            
                <h4 className="sign-up-form__lable">Wedding Date</h4>
                <input className="sign-up-form__input" type="date" name="weddingDate" placeholder="Wedding Date..." required/>
            
            
                <h4 className="sign-up-form__lable">Username</h4>
                <input className="sign-up-form__input" type="text" name="username" placeholder="Username..." required/>
            
            
                <h4 className="sign-up-form__lable">Password</h4>
                <input className="sign-up-form__input" type="password" name="password" placeholder="Password..." required/>
            
            <button type="submit" className="btn">Create our account</button>
        </form>
        <Link to='/login'><span>Already have an account? </span>Sign in here!</Link>
    </div>
    );
}

export default RegisterPage;