import React from 'react'
import AuthContext from '../Context/AuthContext';
import { useEffect, useState, useContext } from 'react';
import jwt_decode from "jwt-decode";


function BookNew() {

    let { authTokens, logoutUser } = useContext(AuthContext)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    console.log(user)
    return (
        <div>BookNew</div>
    )
}

export default BookNew