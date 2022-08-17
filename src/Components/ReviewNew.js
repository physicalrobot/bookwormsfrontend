import { usePreviousProps } from '@mui/utils'
import { Box, Card, CardHeader, CardContent, Typography, CardActions, Button, CardMedia, Avatar, Rating } from '@mui/material'

import React from 'react'
import '../reviewnew.css'
function ReviewNew(props) {
    return (props.trigger) ? (
        <div className='reviewnew'>
            <div className='reviewnew-inner'>
                <div className='hello'>
                    {/* <img className='newreviewbookcover' src={props.cover} /> */}
                </div>
                <Button className='close-btn' onClick={() => props.setTrigger(false)}>close</Button>
                {props.children}
            </div >

        </div>
    ) : ""
}

export default ReviewNew