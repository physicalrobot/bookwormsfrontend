import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import wormie from '../images/wormie.png';
import Search from './Search';
import { Box, Card, CardHeader, CardContent, TextField, Typography, CardActions, Button, CardMedia, Avatar, Rating } from '@mui/material'




const Header = () => {

    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')

    }

    let { user, logoutUser } = useContext(AuthContext)

    return (
        <div className='siteHeader'>
            <div className='headerGroup1'>
                <div className='siteTitle'>
                    <img alt='sitelogo' className='wormie' src={wormie}></img>
                    <h1>BookWorms</h1>
                </div>
            </div>
            {/* </div> */}
            <div className='homeloginout'>
                {/* <p onClick={goHome}> Home</p> */}

                {/* <Button className='homebutt' onClick={goHome}>Home</Button> */}

                {user ? (
                    <div className='bookclublogoutoptions'>
                        <Button className='homebutt' onClick={goHome}>Home</Button>
                        <Link to="/books" style={{ textDecoration: 'none' }}> <Button className='allbooksbutt'>Books</Button></Link>

                        {/* <p onClick={logoutUser}
                            >Logout</p> */}
                        <Button className='logoutbutt' onClick={logoutUser}>Logout</Button>

                    </div>
                ) : (
                    // <Link to='/login' style={{ textDecoration: 'none' }}><Button className='loginbutt'>Login</Button></Link>
                    ""
                )}

            </div>
            {/* <span></span> */}
            <div className='headerGroup2'>


                <div className='userstuff'>
                    {user && <p>Hello {user.username}</p>}
                </div>
            </div>
            {/* 
                // <div><h1>hello</h1></div>
                // <div><h1>hello</h1></div>
                // <div><h1>hello</h1></div> */}




        </div>
    )
}

export default Header