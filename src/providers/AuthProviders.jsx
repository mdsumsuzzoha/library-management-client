

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { app } from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const userinfo = {user};
    // console.log(user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdate = async (name, photoURL) => {
        //   console.log(photoURL);
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
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            // if currentUser exist then issue  a token 
            if (currentUser) {
                axios.post(`https://library-management-server-flame.vercel.app/jwt`, loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
            else {
                // if currentUser is null, trigger the server to clear the token cookie
                axios.get('https://library-management-server-flame.vercel.app/logout', { withCredentials: true })
                    .then(
                        console.log('Token cookie cleared successfully')
                    )
                    .catch(error => {
                        console.error('Error during token cookie clearing:', error);
                    });
            }
        });
        return () => {
            unSubscribe();

        }
    }, [])



    const authInfo = {
        user,
        createUser,
        userUpdate,
        signInUser,
        signOutUser,
        signInWithGoogle,
        loading,
        setLoading,

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




