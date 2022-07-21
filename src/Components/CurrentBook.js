import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

function CurrentBook({ book }) {


    return (
        <div className='currentBook'>
            <h1 className='currentbooklabel'>My Current Read</h1>

            <Card sx={{ position: 'relative', top: '0px', display: 'flex', width: 503, alignItems: 'center' }}>
                <CardMedia

                    component='img'
                    height='154 px'
                    image={book.BookCover}
                    sx={{ width: 151 }}

                />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 352 }}>

                    <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
                        <Typography
                            gutterBottom variant='h5' component='div' sx={{ position: 'relative', top: '-10px' }}>{book.BookTitle}
                        </Typography>
                        <Typography variant='body2' color='text.secondary' sx={{ position: 'relative', top: '-10px' }}>Book Synopsis
                        </Typography>
                        <CardActions>
                            <Button size='small' sx={{ flex: '1 0 auto', position: 'relative', top: '20px' }} >
                                write review
                            </Button>
                        </CardActions>
                    </CardContent>
                </Box>
            </Card>
        </div >
    )
}

export default CurrentBook