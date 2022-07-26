import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import UserReviews from "./UserReviews"
function Reviews(book) {

    const b = useLocation()
    console.log(b.state.book)

    return (
        <div className='reviews'>

        </div>
    )

}

export default Reviews



