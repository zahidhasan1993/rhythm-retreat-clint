import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';

export const DataProvider = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if (currentUser) {
                axios.post("https://rhythm-retreat-backend.vercel.app/jwt", {
                    email: currentUser.email,
                })
                .then(data => {
                    localStorage.setItem('ACCESS_TOKEN', data.data.token);
                    setLoader(false)
                })
            }
            else{
                localStorage.removeItem('ACCESS_TOKEN')
            }
            
        })
        // console.log(user);
        return () => unsubscribe();
    }, [])
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth,googleProvider)
    }
    const emailRegister = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const emailLogin = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userUpdate = (name, photo) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };
    const logOut = () => {
        setLoader(true);
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