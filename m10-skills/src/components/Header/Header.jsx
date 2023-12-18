import React from 'react';
import './header.css'

import Logo from './Logo/Logo';
import List from './List/List';
import Contact from './Contact/Contact';
import Search from './Search/Search';

function Header() {
    const listItems = ['Mensen', 'Expertise', 'Opdrachten en Projecten', 'Publicaties']

    return (
        <header className='header'>
            <div className='header__left'>
                <Logo />
                <div className='header__listName'>
                    <h2>Projectmanagementbureau</h2>
                    <List namenList={listItems} />
                </div>
            </div>
            <div className='header__right'>
                <Search />
                <Contact />
            </div>
        </header>
    )
}


export default Header