import { Box, Card, CardHeader, CardContent, Typography, CardActions, Button, CardMedia, Avatar } from '@mui/material'
import { red } from '@mui/material/colors';

function UserReviews() {


    return (
        <div className='userReview'>
            <h1 className='currentbookreviewslabel'>Reviews: BookTitle</h1>
            <Card sx={{ position: 'relative', display: 'flex', width: 503, alignItems: 'center' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }

                    title="reviewtitle"
                    subheader="reviewdate"
                    sx={{ position: 'relative', top: '-25px' }}
                />


                {/* <CardMedia

                    component='img'
                    height='154 px'
                    image='src\images\wormie.png'
                    sx={{ width: 151 }}

                /> */}
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 352, height: 154 }}>


                    <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>

                        {/* <Typography
                            gutterBottom variant='h5' component='div' sx={{ position: 'relative', top: '-10px' }}>reviewtitle
                        </Typography> */}
                        <Typography className='currentbookreview' variant='body2' color='text.secondary' height='80px'
                            sx={{ overflow: 'auto', position: 'relative' }}>review sdfdsf body;l askdjflaskdjf;laskdjf;laskdjf;lasdjf;ldsjf as;ldkfjasdf f;alsdkjf lkasdlkf asd;lkf jasd;lfk jasd;lkfj a;slkjf sd;alfj sd;dsfsdfsdfsdf  ;lfkjasdfasd asdf sdaf asd fasdf sdfas fsdfa sasdfasdf
                        </Typography>
                        <CardActions>
                            <Button size='small' sx={{ flex: '1 0 auto' }} >
                                back
                            </Button>
                            <Button size='small' sx={{ flex: '1 0 auto' }} >
                                next
                            </Button>

                        </CardActions>
                    </CardContent>
                </Box>
            </Card>
        </div >
    )
}

export default UserReviews