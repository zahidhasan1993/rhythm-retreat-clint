import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const DataProvider = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        // console.log(user);
        return () => unsubscribe();
    }, [])
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth,googleProvider)
    }
    const emailRegister = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const emailLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };
    const logOut = () => {
        return signOut(auth)
    }
    const Values = {
        user,
        loader,
        googleLogin,
        emailRegister,
        emailLogin,
        userUpdate,
        logOut
    }
    return (
        <DataProvider.Provider value={Values}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;