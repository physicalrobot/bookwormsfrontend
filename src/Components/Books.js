import { useEffect, useState } from "react"
import { Box, Card, CardContent, Typography, CardActionArea, CardActions, Button, CardMedia } from '@mui/material'
import Rating from '@mui/material/Rating';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Books({ printnum, bookid, handleDeleteBookshelfBook }) {
    const navigate = useNavigate()
    const [book, setBook] = useState()
    const [rating, setRating] = useState()
    // console.log(bookid)
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

    // console.log(book)

    function reviewpage() {

        // navigate('/reviews', { bookid={ bookid } })
        navigate('/reviews', { state: { book: book } });

    }

    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className='bookshelfcard'>

            <Card className='bookcard' sx={{ cursor: 'pointer', maxWidth: 151, height: 260 }}>
                <CardMedia
                    onClick={(e) => reviewpage()}
                    component="img"
                    height="150"
                    width='151'
                    cursor='pointer'

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
                        <Typography sx={{ textAlign: 'left', position: 'relative', top: -18 }} variant="body2" color="text.secondary">
                            <Rating
                                name="read-only-rating"
                                value={book?.Rating}
                                readOnly
                            />
                        </Typography>
                    }
                </CardContent>

                {/* <Button className="removefrombookshelfbutt" sx={{ width: 20, padding: 0, margin: 0, border: 0 }} variant="body2" color="text.secondary">-</Button> */}

            </Card>
            <div className='bookshelfbuttons'>
                {/* <button className="addtobookshelfbutt" >+</button> */}
                <motion.div grow animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className='buttoncontainer'>

                    <Button
                        onClick={() => {
                            { handleDeleteBookshelfBook(bookid) }
                        }}
                        // onClick={handleDeleteBookshelfBook(bookid)} 

                        className="removefrombookshelfbutt" sx={{
                            color: 'transparent', '&:hover': {
                                color: "white"
                            }
                        }} >remove</Button></motion.div>
            </div>

        </motion.div >
    )

}

export default Books