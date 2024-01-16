import React, { useState } from "react";
import './menu.css';

import foto1 from './img/foto1.webp';
import foto2 from './img/foto2.jpg';
import foto3 from './img/foto3.jpg';


function Menu() {
    const [geklikt, setGeklikt] = useState("nietgeklikt")
    const [geklikt1, setGeklikt1] = useState("nietgeklikt")
    const [geklikt2, setGeklikt2] = useState("nietgeklikt")


    const vakje = document.getElementsByClassName("vakje")
    const vakjeImg = document.getElementsByClassName("vakjeImg")
    const title = document.getElementsByClassName("title")
    const vakjeText = document.getElementsByClassName("vakjeText")

    const changeVakje = (i) => {
        if (geklikt == "nietgeklikt") {
            vakje[i].style.animationName = "expand"
            vakjeImg[i].style.display = "none"
            title[i].style.color = "black"
            title[i].classList.add("above")
            setTimeout(() => {
                vakjeText[i].style.display = "inline"
            }, 750);
            setGeklikt("geklikt")
        } else {
            vakje[i].style.animationName = "reduce"
            vakjeImg[i].style.display = "inline"
            title[i].style.color = "white"
            title[i].classList.remove("above")
            vakjeText[i].style.display = "none"
            setGeklikt2("nietgeklikt")
        }




    }
    const changeVakje1 = (i) => {
        if (geklikt1 == "nietgeklikt") {
            vakje[i].style.animationName = "expand"
            vakjeImg[i].style.display = "none"
            title[i].style.color = "black"
            title[i].classList.add("above")
            setTimeout(() => {
                vakjeText[i].style.display = "inline"
            }, 750);
            setGeklikt1("geklikt")
        } else {
            vakje[i].style.animationName = "reduce"
            vakjeImg[i].style.display = "inline"
            title[i].style.color = "white"
            title[i].classList.remove("above")
            vakjeText[i].style.display = "none"
            setGeklikt2("nietgeklikt")
        }




    }
    const changeVakje2 = (i) => {
        if (geklikt2 == "nietgeklikt") {
            vakje[i].style.animationName = "expand"
            vakjeImg[i].style.display = "none"
            title[i].style.color = "black"
            title[i].classList.add("above")
            setTimeout(() => {
                vakjeText[i].style.display = "inline"
            }, 750);
            setGeklikt2("geklikt")
        } else {
            vakje[i].style.animationName = "reduce"
            vakjeImg[i].style.display = "inline"
            title[i].style.color = "white"
            title[i].classList.remove("above")
            vakjeText[i].style.display = "none"
            setGeklikt2("nietgeklikt")
        }




    }


    return (
        <section className="menu">
            <div className="vakje" onClick={() => changeVakje(0)}>
                <h3 className="title">Organisatie</h3>
                <div className="vakjeImg">
                    <img src={foto1} alt="" />
                </div>
                <div className="vakjeText">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptate reprehenderit est omnis ea. Magnam ipsa minima repellat necessitatibus ad, suscipit enim obcaecati ex earum in distinctio sed facere maxime.s</p>
                    <a href="">Meer info</a>
                </div>

            </div>
            <div className="vakje" onClick={() => changeVakje1(1)}>
                <h3 className="title">Projecten</h3>
                <div className="vakjeImg">
                    <img src={foto3} alt="" />
                </div>
                <div className="vakjeText">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptate reprehenderit est omnis ea. Magnam ipsa minima repellat necessitatibus ad, suscipit enim obcaecati ex earum in distinctio sed facere maxime.s</p>
                    <a href="">Meer info</a>
                </div>

            </div>
            <div className="vakje" onClick={() => changeVakje2(2)}>
                <h3 className="title">Werken bij BMV</h3>
                <div className="vakjeImg">
                    <img src={foto2} alt="" />
                </div>
                <div className="vakjeText">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptate reprehenderit est omnis ea. Magnam ipsa minima repellat necessitatibus ad, suscipit enim obcaecati ex earum in distinctio sed facere maxime.s</p>
                    <a href="">Meer info</a>
                </div>

            </div>
        </section>
    )
}

export default Menu