import React from "react"
import Review_all from "../components/Review/Review_All"

const Review_All = () => {

    const rederReview_All = () => {
        return (
            <div>
                <Review_all />
            </div>
        )
    }

    return (
        <div>{rederReview_All()}</div>
    )
}
export default Review_All