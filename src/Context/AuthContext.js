import { createContext, useContext, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";


const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const fakeAuthApi = (username,password) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username === "admin@test.com" && password === "Admin123!"){
                resolve({login:true,status:200})
            }else{
                reject({login:false,status:401})
            }
        },1000)
    })
}

export function AuthProvider({children}){
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [authError,setAuthError] = useState(null)
    const navigate = useNavigate()
    const {state} = useLocation()

    const logoutUser = () => setIsLoggedIn(false)

    const loginUser = async (username,password) =>{
        setAuthError(null)
        try{
            const response = await fakeAuthApi(username,password)
            if(response.status === 200){
                setIsLoggedIn(response.login)
                setAuthError(null)
                state != null ?navigate(state.from):navigate('/')
            }
        }catch(err){
            if(err.status === 401)
            setAuthError("Invalid Username/Password")
        }
    }
    
    return <AuthContext.Provider value={{isLoggedIn,authError,loginUser,logoutUser}}>
        {children}
    </AuthContext.Provider>
}