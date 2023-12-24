

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // const userinfo = {user};
    console.log(user);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdate =async (name, photoURL)=>{
      console.log(photoURL);
      setLoading(true);
      return await updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photoURL,
      })
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,  googleProvider);
        
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])
  

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        userUpdate,
        signInUser,
        signOutUser,
        signInWithGoogle,
        
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;





// import { createContext, useState, useEffect } from 'react';

// // Create the AuthContext
// export const AuthContext = createContext();

// AuthProvider component to wrap around your app
// export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // Simulating authentication check on mount (you would replace this with your logic)
  // useEffect(() => {
  //   // Check if the user is authenticated (e.g., token in localStorage)
  //   const authenticatedUser = localStorage.getItem('user');

  //   if (authenticatedUser) {
  //     // If authenticated, set the user
  //     setUser(JSON.parse(authenticatedUser));
  //   }

  //   // Set isLoading to false once the check is done
  //   setIsLoading(false);
  // }, []);

  // Method to log in the user (replace this with your actual login logic)
  // const login = (userData) => {
  //   localStorage.setItem('user', JSON.stringify(userData));
  //   setUser(userData);
  // };

  // Method to log out the user (replace this with your actual logout logic)
  // const logout = () => {
  //   // localStorage.removeItem('user');
  //   // setUser(null);
  //   console.log("logout from AuthProvider")
  // };

  // Value that the context provider will pass down
  // const authContextValue = {
  //   user,
  //   isLoading,
  //   // login,
  //   logout,
  // };

//   return (
//     <AuthContext.Provider value={authContextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
