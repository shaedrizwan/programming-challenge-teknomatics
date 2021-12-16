import React from 'react'
import { useAuth } from '../../Context/AuthContext'
import './Home.css'

function Home() {
    const {logoutUser} = useAuth()
    return (
        <div>
            <h1>Hello Admin</h1>
            <button className='logout-button' onClick={logoutUser}>Log Out</button>
        </div>
    )
}

export default Home
