import {Link} from "react-router-dom";
import './logo.css';
import LogoAmsterdam from './img/logo.png';



function Logo() {
    return (
        <Link to="/" className='logo'>
            <img className="logo__Img" src={LogoAmsterdam} alt="Gemeente Amsterdam logo" />
        </Link>
    )
}


export default Logo