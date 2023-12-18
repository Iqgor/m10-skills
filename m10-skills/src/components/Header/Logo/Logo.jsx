import React from 'react';
import './logo.css';
import LogoAmsterdam from './img/logo.png';



function Logo() {
    return (
        <a href="https://amsterdam.nl" className='logo'>
            <img className="logo__Img" src={LogoAmsterdam} alt="Gemeente Amsterdam logo" />
        </a>
    )
}


export default Logo