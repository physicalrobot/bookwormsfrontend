import { useEffect, useState } from 'react';


function BookReview() {


    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [rating, setRating] = useState();

    const [reviews, setReviews] = useState([]);


    useEffect(() => {

        fetch('http://127.0.0.1:8000/reviews/', {

        }).then((res) => res.json())
            .then((res) => setReviews(res))

    }, []);


    const newReview = () => {
        const uploadData = new FormData();
        uploadData.append('ReviewRating', rating)
        uploadData.append('ReviewBook', title)
        uploadData.append('ReviewBody', body);

        fetch('http://127.0.0.1:8000/reviews/', {
            method: 'POST',
            body: uploadData
        }).then(res => console.log(res))
            .then(fetch('http://127.0.0.1:8000/reviews/', {

            }).then((res) => res.json())
                .then((res) => setReviews(res)))
            .catch(error => console.log(error))

    }

    return (
        <div>
            <label>Book<input type='text' value={title} onChange={
                (evt) => setTitle(evt.target.value)}
            ></input></label>
            <label>Rating<input type='text' onChange={
                (evt) => setRating(evt.target.value)}></input></label>
            <label>Body<input type='text' onChange={
                (evt) => setBody(evt.target.value)}></input></label>
            <button onClick={() => newReview()}>Leave Review</button>
            {/* {reviews.map((review) => (

                <h1>{review?.ReviewBody}</h1>
            ))} */}

        </div>

    )
}

export default BookReview