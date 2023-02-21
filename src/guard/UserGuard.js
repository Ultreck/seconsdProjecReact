import React from 'react'
import MainRoute from '../components/MainRoute'
import { Navigate } from 'react-router-dom';

const UserGuard = () => {
      const isLoggedIn = true;
      if (isLoggedIn){

            return <MainRoute/> 
      }else{

            return <Navigate to="/login"/>
      }

}

export default UserGuard
