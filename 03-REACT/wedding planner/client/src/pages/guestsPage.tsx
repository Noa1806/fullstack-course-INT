import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import ProfileNavBar from '../components/profileNavBar/ProfileNavBar';
import "../style/dist/guestsPage.css";
import {Guest} from "./addGuestsPage";

function GuestsPage() {
  
    const [guests, setGuests] = useState<Guest[]>([]);

    useEffect(() => {
      getGuestsOfUser();
    }, []);
  
    const getGuestsOfUser = async () => {
      try {
        const response = await axios.get("/api/guests/get-guests");
        const guests = response.data.guests;
        if (Array.isArray(guests)) {
          setGuests(guests);
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <div>
        <ProfileNavBar />
        <div id="guests-page">
            <h1>Oops!</h1>
            <p>this page is still not ready.</p>
            <Link to='/addGuests' className="button-paper">Add your guests</Link>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Number Of Guets</th>
                  <th>Category</th>
                </tr>
              </thead>
              {guests.map((guest) => (
              <tbody key={guest.phoneNumber} >
                <tr>
                  <td>{guest.firstName}</td>
                  <td>{guest.lastName}</td>
                  <td>{guest.phoneNumber}</td>
                  <td>{guest.numberOfGuests}</td>
                  <td>{guest.guestType}</td>
                </tr>
              </tbody>
              ))}
            </table>
        </div>
      </div>
    );
  }
  export default GuestsPage;