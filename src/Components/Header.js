import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import wormie from '../images/wormie.png';
import Search from './Search';




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
                <div className='homeloginout'>
                    <p onClick={goHome}> Home</p>
                    {user ? (
                        <div className='bookclublogoutoptions'>
                            <p>Bookclubs</p>

                            <p onClick={logoutUser}
                            >Logout</p>
                        </div>
                    ) : (
                        <Link to='/login'>Login</Link>
                    )}

                </div>
            </div>
            <div className='headerGroup2'>

                {/* <span></span>            s */}
                <div className='search'>
                    {/* <Search /> */}
                </div>
                <div className='userstuff'>
                    {user && <p>Hello {user.username}</p>}
                </div>
            </div>





        </div>
    )
}

export default Header