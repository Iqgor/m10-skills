import React from 'react';
import Main from '../components/Main/Main';


const Werk = (props) => {
    let id = 3
    return (
        <Main props={id} title={props.naam}/>
    );
};

export default Werk;