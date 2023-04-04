import React from "react"
import {CoachProps} from "./index"
import Header from "./Header"
import Carousel from "./Carousel"
import Reviews from "./Reviews"
import Calendar from "./Calendar"

function SelectedCoachPage (props: CoachProps){
    const {name,title, rate, description,id, reviews, tags} = props;
   
    const tagsToShow = !!tags?tags.map(tag => (<div className = "text-gray-700 rounded bg-gray-300 px-1.5 mr-1">{tag}</div>)):<div/>
    
    
    return (
    <div className="w-full">
        <div className = "mt-10 mb-3.5">
            <Header></Header>
        </div>
        <div className = "mb-3">
            <Carousel></Carousel>
        </div>

        <div>
            <div className = "flex justify-between">
                <p><strong>{title}</strong></p>
                <p><strong>${rate}</strong> hour</p>
            </div>
            
            <p className = "text-gray-500">{name}</p>
            <div className = "flex flex-row mb-3 ">
                {tagsToShow}
            </div>
            <p className = "text-gray-700">{description}</p>
        </div>
        <button className = "my-6 p-2 rounded-md bg-black text-white w-full"><strong>Book Session</strong></button>
        <Reviews reviews = {reviews} ></Reviews>
        <Calendar></Calendar>
    </div>)
    
}

export default SelectedCoachPage