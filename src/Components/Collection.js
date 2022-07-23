import React from 'react'
import '../bookcollection.css';
import AuthContext from '../Context/AuthContext';
import { useEffect, useState, useContext } from 'react';
import jwt_decode from "jwt-decode";


function Collection() {
    let { authTokens, logoutUser } = useContext(AuthContext)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [currentbook, setCurrentBook] = useState([])
    let [bookshelf, setBookshelves] = useState([])
    let [account, setAccount] = useState(JSON.parse(localStorage.getItem('account')) ? JSON.parse(localStorage.getItem('account')) : null)
    let [id, setId] = useState(user.user_id)

    const bookshelfid = account[0].bookshelf
    const bookid = account[0].book

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
            setCurrentBook(data1)
        } else if (response1.statusText === 'Unauthorized') {
            logoutUser()
        }
    }


    getBookShelves()

    console.log(account)
    console.log(bookshelf)
    console.log(currentbook)
    return (
        <div className='collection'>
            <h1>The</h1>
            <h1>Collection</h1>
        </div>
    )
}

export default Collection