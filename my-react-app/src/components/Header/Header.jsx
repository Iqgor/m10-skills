import React from 'react';
import './header.css'

import Logo from './Logo/Logo';
import List from './List/List';

function Header(){
    return(
        <header className='header'>
            <Logo/>
            <div className='header__divider'>
                <h2>Projectmanagementbureau</h2>
                <List/>
            </div>
        </header>
    )
}


export default Header