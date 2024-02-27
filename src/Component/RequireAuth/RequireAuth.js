import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
     if(loading){
       return <p>Loading...</p>
     }
    if(!user){
        return <Navigate to='/login' state={{form: location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;