import React from 'react';
import { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const UseAuth = () => {
    const authInfo = use(AuthContext);
    console.log(authInfo)
    return AuthContext

};

export default UseAuth;