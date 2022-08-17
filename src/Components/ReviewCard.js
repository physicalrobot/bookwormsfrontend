import '../reviewpage.css';

import React from 'react'
import { Box, Card, CardContent, CardHeader, Avatar, Typography, CardActionArea, CardActions, Button, CardMedia } from '@mui/material'


function ReviewCard({ book }) {

    console.log(book)
    return (
        <div className='reviewCard'>

            <Card sx={{ position: 'relative', display: 'flex', width: 700, alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                            R
                        </Avatar>
                    }

                    title={book.title}
                    subheader="user"
                    sx={{ position: 'relative', top: '-25px' }}
                />



                <Box sx={{ display: 'flex', flexDirection: 'column', width: 352, height: 154 }}>


                    <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>


                        <Typography className='currentbookreview' variant='body2' color='text.secondary' height='80px'
                            sx={{ overflow: 'auto', position: 'relative', width: 500 }}>{book.body}
                        </Typography>
                     
                    </CardContent>
                </Box>
            </Card>
        </div>
    )
}

export default ReviewCard