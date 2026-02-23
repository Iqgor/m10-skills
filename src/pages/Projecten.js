import React from 'react';
import Main from '../components/Main/Main';


const Projecten = (props) => {
    let id = 2
    return (
        <Main props={id} title={props.naam}/>
    );
};

export default Projecten;