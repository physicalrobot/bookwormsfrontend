import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import UserReviews from "./UserReviews"

function Reviews(book) {
    let [reviews, setReviews] = useState()
    const b = useLocation()

    useEffect(() => {
        getReviews()

    }, [])

    const getReviews = async () => {
        let response = await fetch("http://127.0.0.1:8000/reviews", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        let data = await response.json()

        if (response.status === 200) {
            setReviews(data)
        }
    }
    const reviewbook = b.state.book
    // collection.map((book) => book.BookGenre.includes(2))
    // const activebookreview = reviews?.filter((book) => book.includes(reviewbook.BookId))
    // console.log(reviewbook.BookId)
    // const result = myArray.filter(item => item.aid === 1)
    const reviewthisbook = reviews?.filter(book => book.book === reviewbook.BookId)
    console.log(reviewthisbook)
    // console.log(reviews)
        
    return (
        <div className='reviews'>


        </div>
    )

}

export default Reviews



