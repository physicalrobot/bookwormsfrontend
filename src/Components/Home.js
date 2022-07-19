import '../homepage.css';
import CurrentBook from './CurrentBook';
import BookClubFeed from './BookClubFeed';
import UserReviews from './UserReviews';
import UserRead from './UserRead';
import UserDnf from './UserDnf';
import Books from './Books';
import BookClubInvite from './BookClubInvite';
import BookReview from './BookReview';
import Bookshelf from "./Bookshelf";
import BookClubs from './BookClubs';
import {
    BrowserRouter, Routes,
    Link,
    Outlet,
    Route,
    Router
} from "react-router-dom"
import { useForm } from "react-hook-form"
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import jwt_decode from "jwt-decode";


function Home({ wormie }) {

    let [bookshelf, setBookshelves] = useState([])
    let { authTokens, logoutUser } = useContext(AuthContext)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    useEffect(() => {
        getBookShelves()
    }, [])


    let getBookShelves = async () => {
        let response = await fetch(`http://127.0.0.1:8000/bookshelf/${user.user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if (response.status === 200) {
            setBookshelves(data)
        } else if (response.statusText === 'Unauthorized') {
            logoutUser()
        }

    }
    console.log(bookshelf)
    return (
        <div >
            <div className='siteHeader'>

                <div className='siteTitle'>
                    <img alt='sitelogo' className='wormie' src={wormie}></img>
                    <h1>BookWorms</h1>
                </div>

                <div className='headerOptions'>

                    <Books />

                    <BookClubInvite />
                </div>

                <h2 className='userName'>Reader Name</h2>
            </div>




            <div className='homecontainer'>







                <div className='currentBookandBookReview'>
                    <CurrentBook />
                    <BookReview />

                </div>
                <div className='Bookshelf'>

                    <Bookshelf bookshelf={bookshelf} />

                </div>
                <div className='Bookclubs'>
                    <BookClubs user={user} />

                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <input ref={register} type='file' name='picture' />
                        <button>hello</button>

                    </form> */}
                </div>
                <div className='BookclubFeed'>
                    <BookClubFeed />

                </div>
                <div className='UserReviews'>

                    <UserReviews />
                    <Link to="/books"><button><h1>books</h1></button></Link>

                </div>
            </div>
        </div >
    )
}

export default Home

