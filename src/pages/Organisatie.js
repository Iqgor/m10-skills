import React from 'react';
import Main from '../components/Main/Main';


function Organisatie(props){
    let id = 1
    return (
        <Main props={id} title={props.naam}/>
    );
};

export default Organisatie;