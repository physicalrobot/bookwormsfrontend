import React from 'react'
import '../bookcollection.css';
import AuthContext from '../Context/AuthContext';
import { useEffect, useState, useContext } from 'react';
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';
import Books from './Books';


function Collection({ genredata }) {
    let { authTokens, logoutUser } = useContext(AuthContext)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [currentbook, setCurrentBook] = useState([])
    let [bookshelf, setBookshelves] = useState([])
    let [account, setAccount] = useState(JSON.parse(localStorage.getItem('account')) ? JSON.parse(localStorage.getItem('account')) : null)
    let [id, setId] = useState(user.user_id)
    const [collection, setCollection] = useState([])
    useEffect(() => {
        getBookShelves()
        getBooks()
    }, [collection])

    console.log(genredata[0]?.genre)
    let getBookShelves = async () => {


        const bookshelfid = account[0].bookshelf
        const bookid = account[0].book
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
            }
        })
        let data1 = await response1.json()

        if (response1.status === 200) {
            setCurrentBook(data1)
        } else if (response1.statusText === 'Unauthorized') {
            logoutUser()
        }

    }


    let getBooks = async () => {
        let response = await fetch(`http://127.0.0.1:8000/books`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setCollection(data)
        }

    }




    console.log(account)
    console.log(bookshelf)
    console.log(currentbook)
    // console.log(collection[0])
    return (
        <div className='collection'>
            <h1>The</h1>
            {console.log(collection)}
            <h1>Collection</h1>

            <div className='all-books'>
                <div className='bookitem'>
                    {collection.map((book) => {
                        return <Books bookid={book.BookId} />
                    })}
                </div>
            </div>
            <Link to="/newbook"><button><h1>add book</h1></button></Link>

        </div>
    )
}

export default Collection