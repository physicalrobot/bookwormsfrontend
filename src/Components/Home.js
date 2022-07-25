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
import Reviews from './Reviews'


function Home({ wormie }) {
    let [book, setBook] = useState([])

    let [bookshelf, setBookshelves] = useState([])
    let { authTokens, logoutUser } = useContext(AuthContext)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

    let [account, setAccount] = useState(JSON.parse(localStorage.getItem('account')) ? JSON.parse(localStorage.getItem('account')) : null)
    let [id, setId] = useState(user.user_id)
    let [bookshelfid, setBookshelfId] = useState()
    let [bookid, setBookId] = useState()

    useEffect(() => {
        getAccount()
        getBookShelves()
        savelocalaccount()
    }, [account])

    useEffect(() => {
        if (localStorage.getItem('account'))
            setAccount(JSON.parse(localStorage.getItem("account")));
    }, [])

    let accountinfo = {}
    const savelocalaccount = () => {
        if (account?.length !== 0) {        //this line is new
            localStorage.setItem("account", JSON.stringify(account))
        }
    }

    const getAccount = async () => {
        let response = await fetch("http://127.0.0.1:8000/account", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        let data = await response.json()

        if (response.status === 200) {
            setAccount(data.filter(person => person.user == id))
            setBookId(account[0].book)
            setBookshelfId(account[0].bookshelf)
        } else if (response.statusText === 'Unauthorized') {
            logoutUser()
        }
    }

    let getBookShelves = async () => {
        let response = await fetch(`http://127.0.0.1:8000/bookshelf/${bookshelfid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        let data = await response.json()

        if (response.status === 200) {
            setBookshelves(data)
        } else if (response.statusText === 'Unauthorized') {
            logoutUser()
        }

        let response1 = await fetch(`http://127.0.0.1:8000/books/${bookid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data1 = await response1.json()
        if (response1.status === 200) {
            setBook(data1)
        } else if (response1.statusText === 'Unauthorized') {
            logoutUser()
        }
    }

    return (
        <div >
            <div className='homecontainer'>
                <div className='currentBookandBookReview'>
                    <CurrentBook book={book} />
                    <Reviews />
                </div>

                <div className='Bookshelf'>
                    <Bookshelf user={user} bookshelf={bookshelf} />
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
                    <Link to="/books"><button><h1>books</h1></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home

