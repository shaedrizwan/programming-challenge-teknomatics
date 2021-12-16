import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import './Login.css'

function Login() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState("")
    const [error,setError] = useState(null)
    const{isLoggedIn,loginUser,authError} = useAuth()


    const loginHandler = () =>{
        try{
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
            if(regex.test(password)){
                setError(null)
                loginUser(email,password)
            }else{
                throw new Error("Password must be 8-20 characters, must contain letters (upper and lower case), at least 1 number, and 1 special character")
            }
        }catch(err){
            setError(err.message)
        }
    }

    return (
        <div className='login'>
            <div className="login-wrapper">
                {!isLoggedIn && <>
                <div className="login-heading">Login</div>
                <div className="login-title">Email</div>
                <input className="login-input" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email"/>
                <div className="login-title">Password</div>
                <input className="login-input" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
                </>}
                {isLoggedIn && <div className="login-title">You're already logged in!</div>}
                {error && <div className='error-text'>{error}</div>}
                {authError && <div className='error-text'>{authError}</div>}
                <button className="login-button" onClick={loginHandler}>{isLoggedIn ? "Log out":"Login"}</button>
            </div>
        </div>
    )
}

export default Login
