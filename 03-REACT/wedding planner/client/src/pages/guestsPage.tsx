//import { Link } from 'react-router-dom';

 function GuestsPage() {
  
  return (
        <div>
            <h2>Your Guests List</h2>
                <form className="add-guest-form" onsubmit="AddGuest(event)">
                    <div className="add-guest-form__input">
                        <h4>First Name</h4>
                        <input type="text" placeholder="Guest's first name..."/>
                    </div>
                    <div className="add-guest-form__input">
                        <h4>Last Name</h4>
                        <input type="text" placeholder="Guest's last name..."/>
                    </div>
                    <div className="add-guest-form__input">
                        <h4>Phone Number</h4>
                        <input type="text" placeholder="Guest's phone number..."/>
                    </div>
                    <div className="add-guest-form__input">
                        <h4>Number Of Guests</h4>
                        <input type="text" placeholder="Number of guests..."/>
                    </div>
                    <div className="add-guest-form__input">
                        <h4>Guest Category</h4>
                        <input type="text" placeholder="List of category..."/>
                    </div>
                    <button type="submit" className="btn">Add To Your List</button>
                </form>
            </div> 
    );
}

export default GuestsPage;