import React from "react";
import './main.css'
import foto1 from './ImageSlider/img/foto1.jpg'
import foto2 from './ImageSlider/img/foto2.jpg'
import foto3 from './ImageSlider/img/foto3.jpg'
import foto4 from './ImageSlider/img/foto4.jpg'
import foto5 from './ImageSlider/img/foto5.jpg'


import ImageSlider from './ImageSlider/slider';

function Main() {
  const images = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,

  ];
  return (
    <main className="main">
      <h2 className="main__title">Bouwmanagement en Maatschappelijk Vastgoed</h2>
      <ImageSlider images={images} interval={7500} />
    </main>
  );
}

export default Main;
