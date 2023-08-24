import {  NavLink } from 'react-router-dom'
import "./dist/NavBar.css"


const NavBar = () => {
    try {
        return (
            <div>
                <nav className='navBar'>
                    <NavLink className="navLable" to={`/`}>Home</NavLink>
                    <NavLink className="navLable" to={`/about`}>About</NavLink>
                    <NavLink className="navLable" to={`/catalogue`}>Catalogue</NavLink>
                    <NavLink className="navLable" to={`/login`}>Sign In</NavLink>
                    <NavLink className="navLable" to={`/register`}>Sign Up</NavLink>
                </nav>
            </div>
        )
    } catch (error) {
        console.error(error)
        return null
    }

}

export default NavBar;