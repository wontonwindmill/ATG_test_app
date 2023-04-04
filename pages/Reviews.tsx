import React from "react"
export type ReviewProps = {
    date: string
    id: string
    name: string
    review: string
}

export type ReviewPropsList = {
    reviews: ReviewProps[]
}
function Reviews({reviews}:ReviewPropsList){
   

    const reviewsToShow = reviews.length > 0?reviews.map(review => 
    <div className = "snap-center border-solid rounded border p-3 mr-3 min-w-[90%]">
        <div className = "mt-2 flex flex-row">
            <img className = "mr-2 rounded-full max-w-[32px] max-h-[32px]" src = {"./images/coaches/0/reviews/"+review.id+"/img.jpg"}></img>
            <div className = "leading-none">
                <div>{review.name}</div>
                <div className = "text-gray-500">{review.date}</div>
            </div>
        </div>
        <div className = "text-gray-700 mt-4">
            {review.review}
        </div>
        
    </div>):<div></div>
    return(
        <div>
            <p className = "mb-5">{reviews.length} reviews</p>
            <div className = "overflow-x-auto snap-x snap-mandatory touch-pan-x flex flex-row">
                {reviewsToShow}
            </div>
        </div>
        
    )
}

export default Reviews