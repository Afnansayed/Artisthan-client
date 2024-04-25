import { createContext, useState} from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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



    const authInfo = {user,loading,createUser,logInUser,google}
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