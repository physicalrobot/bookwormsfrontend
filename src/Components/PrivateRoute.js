import { Route, Redirect, Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import React, { useContext } from 'react'

const PrivateRoute = ({ children, ...rest }) => {
    console.log('private route  works!')
    let { user } = useContext(AuthContext)
    console.log(user)


    return (
        !user ? <Navigate to="/login" /> : <Outlet />
    )
}

export default PrivateRoute;