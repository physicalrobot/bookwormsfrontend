import { useEffect, useState } from "react"
import { Box, Card, CardContent, Typography, CardActionArea, CardActions, Button, CardMedia } from '@mui/material'
function Books({ bookid }) {
    const [book, setBook] = useState()
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
    console.log(book)


    return (
        <div className='bookshelfcard'>
            {/* <Card sx={{ position: 'relative', top: '0px', width: 400, alignItems: 'center', height: '154px' }}>
                <CardMedia
                    component='img'
                    height='154 px'
                    image={book?.BookCover}
                    sx={{ width: 151 }}
                />
                <Box sx={{ width: 352 }} >

                    <CardContent >

                        <Typography >{book?.Synopsis}
                        </Typography>
                        <CardActions>
                            <Button >
                                write review
                            </Button>
                        </CardActions>
                    </CardContent>
                </Box>
            </Card> */}

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
                        <Typography sx={{ textAlign: 'left', position: 'relative', top: -15 }} variant="body2" color="text.secondary">
                            {book?.Rating}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>




        </div>
    )

}

export default Books