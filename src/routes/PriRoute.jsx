import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/UserContext';

const PriRoute = ({children}) => {
  const {currentUser}=UserAuth();
   if (!currentUser){
    return <Navigate to="/" replace={true}/>
   }
  return children;
}

export default PriRoute