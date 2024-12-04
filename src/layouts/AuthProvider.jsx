import { createContext, useEffect, useState } from "react";
import { auth } from "../assets/firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
const goggleProvider= new GoogleAuthProvider()
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
 
 //create user
 const createNewUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
// user sign in
const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// log out
const logOut = ()=>{
    setLoading(true)
    signOut (auth)
}

// sign in with google
const signInWithGoggle = ()=>{
    setLoading(true)
    return signInWithPopup(auth,goggleProvider)
}


    const authInfo = {
        createNewUser,
        signInUser,
        user,
        setUser,
        logOut,
        loading,
       
        signInWithGoggle,
      
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
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;