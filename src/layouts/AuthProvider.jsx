import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../assets/firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const goggleProvider= new GoogleAuthProvider()
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

// new user
const createNewUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
  // user sign in
  const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

    // sign in with google
    const signInWithGoggle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,goggleProvider)
    }
  
   // state change
   useEffect(()=>{
    const unSubsCribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    });
    return()=>{
        unSubsCribe()
    }
   },[])



    const authInfo = {
    createNewUser,
      user,
      setUser,
loading,
signInUser,
signInWithGoggle
    }
      
      
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;