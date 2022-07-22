import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

function CurrentBook({ book }) {
    console.log(book)

    return (
        <div className='currentBook'>
            <h1 className='currentbooklabel'>{book.BookTitle}</h1>

            <Card sx={{ position: 'relative', top: '0px', display: 'flex', width: 503, alignItems: 'center', height: '154px' }} >
                <CardMedia

                    component='img'
                    height='154 px'
                    image={book.BookCover}
                    sx={{ width: 151 }}

                />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 352, height: 150 }}>

                    <CardContent className='currentbooksynopsis' sx={{ textAlign: 'left', height: '100px', overflow: 'auto' }}>
                        {/* <Typography
                            gutterBottom variant='h5' component='div' sx={{ position: 'relative', top: '-10px' }}>{book.BookTitle}
                        </Typography> */}
                        <Typography variant='body2' color='text.secondary'>{book.Synopsis}
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size='small' sx={{ flex: '1 0 auto', position: 'relative', }} >
                            write review
                        </Button>
                    </CardActions>
                </Box>
            </Card>
        </div >
    )
}

export default CurrentBook