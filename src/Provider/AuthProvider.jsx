import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    const createUser = (email,password)=>{
        setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            if(currentUser && currentUser.email){
                // get token and store client
                const userInfo = {email:currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res =>{
                  if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                    setLoading(false)
                  }
                })
                .catch(err =>{
                    console.log('error getting token',err);
                })
                
            }
            else{
                // TODO: remove token (if token stored in the client side: local storage, cashing, in memory)
                localStorage.removeItem('access-token')
                setLoading(false)
            }
          
        })
        return ()=> unSubscribe()
    },[axiosPublic])

    const userInfo = {
        user, createUser,login,logOut,googleLogin
    }

   return(
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
   )
};

export default AuthProvider;