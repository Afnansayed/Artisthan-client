import { createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const Provider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

//authentication 
//password and email
     const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
     }
     //login email and password
     const logInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
     }

     //sign in with google
     const googleProvider = new GoogleAuthProvider();

     const google = () => {
            setLoading(true);
        return  signInWithPopup(auth,googleProvider)
     }

     //signIn with github 
     const gitProvider = new  GithubAuthProvider();
     const gitHub = () => {
        setLoading(true);
        return signInWithPopup(auth,gitProvider);
        
     }
     //log Out 
     const logOut = () => {
        return signOut(auth);
     }
     //Current User /OnAuth state change
       useEffect(() => {
             const unsubscribe = onAuthStateChanged(auth,currentUser => {
              //  console.log(currentUser)
                setUser(currentUser);
                setLoading(false)
             });
             return () => unsubscribe();
       },[])

  //console.log(user)

    const authInfo = {user,loading,createUser,logInUser,google,gitHub,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};
Provider.propTypes={
    children:PropTypes.node
}
export default Provider;