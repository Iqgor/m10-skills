import React, { useState, useEffect } from 'react';
import './slider.css';

const ImageSlider = ({ images, interval = 3000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [images.length, interval]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };


    let name = "Test" 

    switch (currentImageIndex) {
        case 0:
            name = "Sportpark Goed Genoeg & Clubgebouw AFC"
            break;
    
        case 1:
            name = "Renovatie Bostheater"
            break;
    
        case 2:
            name = "Nieuwbouw AICS"
            break;
    
        case 3:
            name = "Renovatie de Wereldburger"
            break;
    
        case 4:
            name = "Verbouwing en Nieuwbouw Werven en Overslagpunten"
            break;
    
        default:
            name = "Test"
            break;
    }
     



    return (
        <div className="auto-slider-container">
            <button className="nav-button nav-button-left" onClick={prevImage}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="auto-slider-image"
            />
            
            <button className="nav-button nav-button-right" onClick={nextImage}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            <h3 className='auto-slider-title'>{name}</h3>
        </div>
    );
}

export default ImageSlider