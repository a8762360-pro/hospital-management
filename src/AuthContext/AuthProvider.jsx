import { createUserWithEmailAndPassword, getIdToken, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    // const [ user, setUser ] = useState(null);
    const [ user, setUser ] = useState(null);
    const [token, setToken] = useState("");
    console.log(user)

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
                const idToken = await getIdToken(currentUser);
                console.log(idToken)
                const res = await axios.get(
                    `http://localhost:3000/users/${currentUser.email}`,
                    {
                        headers: {
                            authorization: `Bearer ${idToken}`
                        }
                    }
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
        createUser, numberPassLogin, loading, setLoading, user, setUser, logOut, token, setToken
    }
    return (
        <AuthContext value={AuthValue}>
            {children}
            {/* <ChatbotWidget></ChatbotWidget> */}
        </AuthContext>
    );
};

export default AuthProvider;