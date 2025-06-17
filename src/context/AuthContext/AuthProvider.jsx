import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {

  const [loading, setLoading]= useState(true)
  const [user , setUser]= useState(null)

  const createUser =(email , password)=>{
      setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password)
  }
  const logInUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password )
  }
  const updateUser=(updateData)=>{
    return updateProfile(auth.currentUser , updateData)
  }
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }
  useEffect( ()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoading(false)
      if(currentUser?.email){
        axios.post('http://localhost:3000/jwt', {email: currentUser.email}, {withCredentials: true})
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
      }
      // if(currentUser?.email){
      //   const userData = {email: currentUser.email}
      //   axios.post('http://localhost:3000/jwt', userData,{
      //     withCredentials: true
      //   })
      //   .then(res=> {
      //     console.log(res.data)
      //     // const token = res.data.token;
      //     // localStorage.setItem('token', token )
      //   })
      //   .catch(error => console.log(error))
        
      // }
      console.log('user in the Auth state change', currentUser)
    })
    return()=>{
      unSubscribe()
    }
  },[])
  const authInfo={
    loading,
    user,
    createUser,
    logInUser,
    logOut,
    updateUser,
    setUser,
    setLoading

  }
  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;