import React from "react";
import './main.css'
import foto1 from './ImageSlider/img/foto1.webp'
import foto2 from './ImageSlider/img/foto2.webp'
import foto3 from './ImageSlider/img/foto3.webp'
import foto4 from './ImageSlider/img/foto4.webp'
import foto5 from './ImageSlider/img/foto5.webp'


import ImageSlider from './ImageSlider/Slider';
import Overons from './Overons/Overons';
import Menu from './Menu/Menu';
import Werkwijze from './Werkwijze/Werkwijze'
import Werkenbij from './Werkenbij/Werkenbij'
import Projects from './Projects/Projects'

function Main(props) {
  const images = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,

  ];




  switch (props.props) {
    case 0:
      return (
        <main className="main">
          <h2 className="main__title">{props.title}</h2>
          <ImageSlider images={images} interval={7500} />
          <div className="main__info">
            <Overons />
          </div>
          <Menu />
        </main>
      )
    case 1:
      return(
        <main className="main" id="top">
          <h2 className="main__title">{props.title}</h2>
            <Werkwijze/>    
        </main>
      )
    case 2:
      return(
        <main className="main" id="top">
          <h2 className="main__title">{props.title}</h2>
            <Projects />

        </main>
      )
    case 3:
      return(
        <main className="main" id="top">
          <h2 className="main__title">{props.title}</h2>
            <Werkenbij/>    
        </main>
      )
    default:
    
  }

}

export default Main;
