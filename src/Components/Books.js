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
        <div>
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

            <Card sx={{ maxWidth: 151 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={book?.BookCover}
                    />
                    <CardContent>
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '14px',
                            lineHeight: '17px'
                        }} gutterBottom variant="h5" component="div">
                            {book?.BookTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {book?.Synopsis}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>




        </div>
    )

}

export default Books