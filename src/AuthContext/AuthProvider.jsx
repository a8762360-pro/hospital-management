import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { AuthContext } from './AuthContext';
import axios from 'axios';
// import auth from '../Firebase/Firebase.config'

const AuthProvider = ({ children }) => {
    // const [ user, setUser ] = useState(null);
    const [ user, setUser ] = useState(null);

    const [ loading, setLoading ] = useState(true)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const numberPassLogin = (number, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, number, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {

            if (currentUser) {
                const res = await axios.get(
                    `http://localhost:3000/users/${currentUser.email}`
                );

                setUser(res.data);
            } else {
                setUser(null);
            }

            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const AuthValue = {
        createUser, numberPassLogin, loading, setLoading, user, setUser, logOut
    }
    return (
        <AuthContext value={AuthValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;