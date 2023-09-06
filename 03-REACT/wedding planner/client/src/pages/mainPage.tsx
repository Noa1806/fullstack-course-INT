import '../style/dist/main.css';
import { Link } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
//import Button from '..//components/button/Button';


function MainPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  

  return (
    <div id="main-page">
      <NavBar />
      <h1>Main page! <br /> Still not ready</h1>
      <Link to='/guests' className="button-paper">Your guest</Link>
      <Link to='/expenses' className="button-paper">Your expenses</Link>
    </div>
  );
}
export default MainPage;