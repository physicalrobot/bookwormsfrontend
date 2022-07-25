import { useEffect, useState } from "react"
import { Box, Card, CardContent, Typography, CardActionArea, CardActions, Button, CardMedia } from '@mui/material'
import Rating from '@mui/material/Rating';
import { motion } from "framer-motion";

function Books({ bookid }) {
    const [book, setBook] = useState()
    const [rating, setRating] = useState()
    useEffect(() => {

        getBooks()

    }, [])
    let getBooks = async () => {
        let response = await fetch(`http://127.0.0.1:8000/books/${bookid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data1 = await response.json()

        if (response.status === 200) {
            setBook(data1)

        }

    }
    // const [value, setValue] = useState < book?.Rating | null > (2);

    // console.log(book?.Rating)


    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className='bookshelfcard'>

            <Card sx={{ maxWidth: 151, height: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="212"
                        width='151'

                        image={book?.BookCover}
                    />
                    <CardContent sx={{
                        height: 80, overflow: 'hidden',
                    }} >
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '14px',
                            lineHeight: '17px',
                            height: '30px',
                            position: 'relative',
                            top: -10,
                            maxWidth: 200,
                            textAlign: 'left',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap'
                        }} gutterBottom variant="h5" component="div">
                            {book?.BookTitle}
                        </Typography>
                        <Typography sx={{
                            fontSize: '10px',
                            height: '25px', overflow: 'hidden', width: '100px', position: 'relative', top: -25, textAlign: 'left'
                        }} variant="body2" color="text.secondary">
                            {book?.BookAuthor}
                        </Typography>
                        {book?.Rating > 0 &&
                            <Typography sx={{ textAlign: 'left', position: 'relative', top: -25 }} variant="body2" color="text.secondary">
                                <Rating
                                    name="read-only-rating"
                                    value={book?.Rating}
                                    readOnly
                                />


                            </Typography>
                        }
                    </CardContent>
                </CardActionArea>

            </Card>




        </motion.div>
    )

}

export default Books