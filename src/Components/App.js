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

function App() {

  return (
    <AuthProvider>
      <div className="App">
 
        <div className='header'><Header /></div>
        <Routes>

          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Home wormie={wormie} />} />

          </Route>
          <Route element={<LogIn />} path='/login' />
        </Routes>

      </div>
    </AuthProvider>
  );
}

export default App;
