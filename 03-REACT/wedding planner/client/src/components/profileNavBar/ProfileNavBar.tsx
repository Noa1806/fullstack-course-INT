/* eslint-disable @typescript-eslint/no-unused-vars */
import {  NavLink} from 'react-router-dom'
import "./dist/ProfileNavBar.css"
import LogoutBtn from '../logoutBtn/LogoutBtn'

const ProfileNavBar = () => {
    try {
        return (
            <div>
                <nav className='navBar'>
                <NavLink className="navLable" to={`/profile`}>My Profile</NavLink>
                    <NavLink className="navLable" to={`/catalogue`}>Catalogue</NavLink>
                    <NavLink className="navLable" to={`/guests`}>My Guests</NavLink>
                    <NavLink className="navLable" to={`/expenses`}>My Expenses</NavLink>
                    <LogoutBtn/>
                </nav>
                <hr className="separator separator--line" />
            </div>
        )
    } catch (error) {
        console.error(error)
        return null
    }

}

export default ProfileNavBar;