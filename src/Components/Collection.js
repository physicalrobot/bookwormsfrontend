import React from 'react'
import '../bookcollection.css';
import AuthContext from '../Context/AuthContext';
import { useEffect, useState, useContext } from 'react';
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';
import Books from './Books';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion'
import { uuid } from 'uuidv4';

function Collection({ genredata }) {
    let { authTokens, logoutUser } = useContext(AuthContext)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    let [currentbook, setCurrentBook] = useState([]);
    let [bookshelf, setBookshelves] = useState([]);
    let [account, setAccount] = useState(JSON.parse(localStorage.getItem('account')) ? JSON.parse(localStorage.getItem('account')) : null)
    let [id, setId] = useState(user.user_id);
    const [collection, setCollection] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    const [search, setSearch] = useState("");



    useEffect(() => {
        getBookShelves()

    }, [collection])
    useEffect(() => {
        getBooks()

    }, [])
    // console.log(genredata[0]?.genre)
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
    console.log(collection)
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
            setFiltered(data)


        }

    }




    // console.log(collection)
    // console.log(bookshelf)
    // console.log(currentbook)
    // console.log(collection[0])
    console.log(filtered)
    return (
        <div className='collection'>
            <Filter collection={collection} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} setSearch={setSearch} search={search}
            />
            <div className='all-books'>
                <motion.div layout className='bookitem'>
                    <AnimatePresence>
                        {filtered.map((book) => {

                            return <Books key={book.BookId} bookid={book.BookId} />
                        })}
                    </AnimatePresence>
                </motion.div >

            </div>




        </div >
    )
}

export default Collection