import wormie from '../images/wormie.png';
import '../App.css';
import Home from './Home'
import CurrentBook from './CurrentBook';
import BookClubFeed from './BookClubFeed';
import UserReviews from './UserReviews';
import UserRead from './UserRead';
import UserDnf from './UserDnf';
import Books from './Books';
import BookClubInvite from './BookClubInvite';
import ChapterUpdates from './BookReview';
import Bookshelf from "./Bookshelf";
import BookClubs from './BookClubs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import PrivateRoute from './PrivateRoute';
import React, { useContext } from 'react'
import LogIn from './LogIn'
import AuthContext, { AuthProvider } from '../Context/AuthContext'
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import Collection from './Collection';
import BookNew from './BookNew';

function App() {
  // let { authTokens, logoutUser } = useContext(AuthContext)
  // let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
  // let [account, setAccount] = useState(JSON.parse(localStorage.getItem('account')) ? JSON.parse(localStorage.getItem('account')) : null)
  // let [id, setId] = useState(user.user_id)


  // useEffect(() => {
  //   if (localStorage.getItem('account'))
  //     setAccount(JSON.parse(localStorage.getItem("account")));
  // }, [])

  // useEffect(() => {
  //   savelocalaccount()
  // }, [account])

  // let accountinfo = {}
  // const savelocalaccount = () => {
  //   if (account.length !== 0) {        //this line is new
  //     localStorage.setItem("account", JSON.stringify(account))
  //   }


  // }



  // const getAccount = async () => {
  //   let response = await fetch("http://127.0.0.1:8000/account", {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })

  //   let data = await response.json()

  //   if (response.status === 200) {
  //     setAccount(data.filter(person => person.user == id))


  //   } else if (response.statusText === 'Unauthorized') {
  //     logoutUser()
  //   }

  // }

  return (
    <AuthProvider>
      <div className="App">

        <div className='header'><Header /></div>
        <Routes>

          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Home wormie={wormie} />} />

          </Route>
          <Route element={<LogIn />} path='/login' />
          <Route element={<Collection />} path='/books' />
          <Route element={<BookNew />} path='/newbook' />



        </Routes>

      </div>
    </AuthProvider>
  );
}

export default App;
