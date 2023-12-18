import React from 'react';
import './list.css';




function List(props) {

    const listItems = props.namenList.map(naam => <li key={naam} className='header__listItem'><a href="https://amsterdam.nl">{naam}</a></li>)



    return (
        <ul className='header__list'>
            {listItems}
        </ul>
    )
}


export default List