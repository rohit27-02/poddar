/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const TopCarousel = () => {
        return (
           <div className='h-[80vh]  overflow-hidden'>
             <Carousel 
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={3000}
            >
                <div>
                    <img src="/1.avif" />
                </div>
                <div>
                    <img src="/2.webp" />
                </div>
                <div>
                    <img src="/3.jpg" />
                </div>
                
            </Carousel>
           </div>
        );
    }

export default TopCarousel;