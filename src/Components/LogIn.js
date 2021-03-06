import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
const LogIn = () => {
    let { loginUser } = useContext(AuthContext)

    return (
        <div>
            <form onSubmit={loginUser} className='loginstuff'>
                <input type='text' name='username' placeholder='Enter Username' />
                <input type='password' name='password' placeholder='Enter Password' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default LogIn