import React from "react"
import ReviewPage from "../components/Review/ReviewPage"

const renderReview = () => {
    return (
        <div>
            <ReviewPage />
        </div>
    )
}

const Review = () => {
    return (
        <div>
            {renderReview()}
        </div>
    )
}

export default Review