import React from "react"
import {useState} from 'react'

function Carousel(){
    const [favorited, setFavorited] = useState(false);
    const className = "absolute float-right top-1 right-1 w-6 h-6" + (favorited? ' fill-red-700' : ' fill-none')
    console.log("here")
    return(
        <div className = "relative">
            <div onClick={ () => setFavorited(!favorited)}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} 
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>
            

            <div className="w-full carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src="./images/coaches/0/img0.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
                <div className="carousel-item w-full">
                    <img src="./images/coaches/0/img1.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
                <div className="carousel-item w-full">
                    <img src="./images/coaches/0/img2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
                
            </div>
        </div>)
        
}

export default Carousel