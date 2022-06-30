import React from 'react';
import axios from 'axios';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import { Carousel } from 'bootstrap';

const handleDragStart = (e) => e.preventDefault();


export function Slideshow() {

    return (
            <div>
                
                <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={image1} className="fadeimg" onDragStart={handleDragStart}/>
                    <img src={image2} className="fadeimg" onDragStart={handleDragStart}/>
                    <img src={image3} className="fadeimg" onDragStart={handleDragStart}/>
                    <img src={image4} className="fadeimg" onDragStart={handleDragStart}/>
                    
                </AliceCarousel>
                
               
            </div>
    );


}




export default Slideshow;