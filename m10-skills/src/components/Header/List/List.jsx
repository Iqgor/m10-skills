import React from 'react';
import './list.css';




function List(props) {

    const listItem = props.namenList.map(naam => <li key={naam} className='header__listItem '><a className="underline" href="https://amsterdam.nl">{naam}</a></li>)



    return (
        <ul className='header__list'>
            {listItem}
        </ul>
    )
}


export default List