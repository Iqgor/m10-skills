import React, { useState } from "react";
import {Link} from "react-router-dom";

import './menu.css';

import Foto1 from './img/foto1.webp';
import Foto2 from './img/foto2.webp';
import Foto3 from './img/foto3.webp';


function Vakje(props) {

    const [geklikt, setGeklikt] = useState("nietgeklikt")

    const vakje = document.getElementsByClassName("vakje")
    const vakjeImg = document.getElementsByClassName("vakjeImg")
    const title = document.getElementsByClassName("title")
    const vakjeText = document.getElementsByClassName("vakjeText")


    const changeVakje = (i) => {

        if (geklikt === "nietgeklikt") {

            vakje[i].style.animationName = "expand"
            vakjeImg[i].style.display = "none"
            title[i].style.color = "black"
            title[i].classList.add("above")
            setTimeout(() => {
                vakjeText[i].style.display = "flex"
            }, 700);
            setGeklikt("geklikt")
        } else {
            vakje[i].style.animationName = "reduce"
            vakjeImg[i].style.display = "inline"
            title[i].style.color = "white"
            title[i].classList.remove("above")
            vakjeText[i].style.display = "none"
            setGeklikt("nietgeklikt")
        }

        

    }

    function toTop(){
        document.documentElement.scrollTop = 0;
    }

    let id = props.id



    return (
        <div className="vakje" onClick={() => changeVakje(id)}>
            <h3 className="title">{props.info.titles[id]}</h3>
            <div className="vakjeImg">
                <img src={props.img} alt="" />
            </div>
            <div className="vakjeText">
                <p>{props.info.texts[id]}</p>
                <Link onClick={toTop} className="underline" to={props.info.links[id]}> <p className="arrow">&gt;</p> Meer info</Link>
            </div>
        </div>
    )

}

function Menu() {
    const info = {
        titles: ['Organisatie', 'Projecten', 'Werken bij BMV'], 
        texts: [
            'Het ontwikkelen en realiseren van maatschappelijke voorzieningen is binnen de gemeente Amsterdam in handen van team BMV: Bouwmanagement en Maatschappelijk Vastgoed, onderdeel van het Projectmanagementbureau.',
            'Bij BMV zijn we bezig met verschillende projecten binnen de gemeente amsterdam. De projecten gaan voornamlijk over maatschappelijke voorzieningen.',
            'BMV is altijd op zoek naar nieuwe collega’s, om aan de slag te gaan als junior-, medior- of senior-bouwmanager of projectmanager maatschappelijk vastgoed.'],
        links: [
            "/organisatie",
            "/projecten",
            "/werkenbij"
        ]
    }

    return (
        <section className="menu">
            <Vakje info={info} img={Foto1} id={0} />
            <Vakje info={info} img={Foto2} id={1} />
            <Vakje info={info} img={Foto3} id={2} />
        </section>
    )
}

export default Menu