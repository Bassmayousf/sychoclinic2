import React, { useState } from 'react';
export const AuthContext =React.createContext()
export default function AuthProvider ({children}){
  const token =localStorage.getItem('token')
  const user = localStorage.getItem('user')
  const email = localStorage.getItem('email')
  const[auth,setAuth]=useState({
    token,
    user,
    email
  })
  
  return(
  <AuthContext.Provider value={{auth,setAuth}}>
    {children}
  </AuthContext.Provider>
  )
}
