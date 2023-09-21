import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import "./dist/LogoutBtn.css";

const LogoutBtn = () => {
    const navigate = useNavigate();

    async function logout() {
        try {
        const response = await axios.get('/api/users/logout', { withCredentials: true });
        
        if (response.status === 200) {
            document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            navigate("/Login")

        } else {
            throw new Error('Logout request failed');
        }
        } catch (error) {
        console.error(error);
        }
    }


    try {
        return (
            <div>
                <Link to='/' onClick={logout} className="button-paper">Logout</Link>
            </div>
        )
    } catch (error) {
        console.error(error)
        return null
    }

}

export default LogoutBtn;


