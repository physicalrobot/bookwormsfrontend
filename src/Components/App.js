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
        {/* <BrowserRouter>
        <Routes>
          <BrowserRouter> */}
        <div className='header'><Header /></div>
        <Routes>
          {/* <Route path='/settings' element={<AuthProvider />}> */}
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Home wormie={wormie} />} />

          </Route>
          {/* <PrivateRoute element={<Home wormie={wormie} />} path='/' exact /> */}
          <Route element={<LogIn />} path='/login' />
          {/* </Route> */}
        </Routes>



        {/* <Routes>
        <Route path='/books' element={<Books />} />
        <Route path='/invite' element={<BookClubInvite />} />
        <Route path='/currentbook' element={<CurrentBook />} />
        <Route path='/bookupdates' element={<bookupdates />} />
      </Routes> */}
        {/* </BrowserRouter>
        </Routes>
      </BrowserRouter> */}
      </div>
    </AuthProvider>
  );
}

export default App;
