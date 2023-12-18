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

    const name = () => {
        return(
            <div>Test</div>
        )

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
            {name}
        </div>
    );
}

export default ImageSlider