import {Link} from 'react-router-dom'
import ProfileNavBar from '../components/profileNavBar/ProfileNavBar';
import "../style/dist/guestsPage.css"

function GuestsPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    
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