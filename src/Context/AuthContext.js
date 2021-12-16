import { createContext, useContext } from "react";


const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({children}){
    
    return <AuthContext.Provider value={{login:false}}>
        {children}
    </AuthContext.Provider>
}