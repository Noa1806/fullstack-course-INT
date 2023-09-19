/* eslint-disable @typescript-eslint/no-unused-vars */
import {  NavLink} from 'react-router-dom'
import "./dist/ProfileNavBar.css"


const ProfileNavBar = () => {
    try {
        return (
            <div>
                <nav className='navBar'>
                <NavLink className="navLable" to={`/profile`}>My Profile</NavLink>
                    <NavLink className="navLable" to={`/catalogue`}>Catalogue</NavLink>
                    <NavLink className="navLable" to={`/guests`}>My Guests</NavLink>
                    <NavLink className="navLable" to={`/expenses`}>My Expenses</NavLink>
                </nav>
                <hr className="separator separator--line" />
                <html className='logout-message'></html>
            </div>
        )
    } catch (error) {
        console.error(error)
        return null
    }

}

export default ProfileNavBar;