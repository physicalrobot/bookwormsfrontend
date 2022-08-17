import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import UserReviews from "./UserReviews"
import ReviewCard from "./ReviewCard"
import { motion, AnimatePresence } from 'framer-motion'
import ReviewNew from "./ReviewNew";
import { Box, Card, CardHeader, CardContent, TextField, Typography, CardActions, Button, CardMedia, Avatar, Rating } from '@mui/material'
function Reviews(book) {
    let [reviews, setReviews] = useState()
    const [newReview, setNewReview] = useState(false)
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
    console.log(reviewbook)
    console.log(reviewthisbook)

    return (
        <div className='reviews'>
            <motion.div layout className='reviewpage'>
                <div className='leftsideReviewPage' ><h1 className='reviewbooktitle'>{reviewbook.BookTitle}</h1>

                    <img className='reviewbookcover' src={reviewbook.BookCover} /></div>
                <div className="reviewlist">
                    <div className='reviewCardlist'>
                        <AnimatePresence>
                            {reviewthisbook?.map((book) => {
                                return <ReviewCard book={book} />
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                <div className='newReview'>
                    <Button className='newreviewbutt' onClick={() => setNewReview(true)}>Write Review</Button>

                    <ReviewNew cover={reviewbook.BookCover} trigger={newReview} setTrigger={setNewReview}>
                        <div className='newreviewform'>
                            <div className='newreviewrating'>
                                <label className='reviewratinglabel'>Rating: </label>
                                <Rating ></Rating>
                            </div>
                            <div className='newreviewtitle'>
                                <label>Review Title: </label>
                                <input></input>
                            </div>
                            <div className='newreviewbody'>

                                <label className='newreviewbodylabel'>Review Body: </label>
                                <textarea className='newreviewbodytextbox'></textarea>
                            </div>
                            {/* <div className='newreviewrating'>
                                <Rating ></Rating>
                            </div> */}
                            <div className='subbutt'>
                                <Button className='reviewsubmitbutt' >Submit Review</Button>
                            </div>
                        </div>
                    </ReviewNew>
                </div>
            </motion.div>
        </div>
    )

}

export default Reviews



