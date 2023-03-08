import React, {useEffect, useState} from 'react'
// import MainRoute from '../components/MainRoute'
// import { Navigate } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../baseUrl';
import { useNavigate } from 'react-router-dom';
import MainRoute from '../components/MainRoute';

const UserGuard = () => {
      const [mainPage, setMainPage] = useState(<>Loading...</>)
      const navigate = useNavigate();
      // const isLoggedIn = true;
      useEffect(() => {
            axios.get(baseUrl + "/profile", {headers:{"Authorization": localStorage.token}}).then(res => {
                  console.log(res);
                  if(res.data.success){
                        setMainPage(<MainRoute/>)
                  }
            }).catch(err => {
                  console.log(!err?.response.data.success);
                  navigate("/login");
            })
      }, [navigate])
      
      // if (isLoggedIn){

      //       return <MainRoute/> 
      // }else{

      //       return <Navigate to="/login"/>
      // }
return<>{mainPage}</>
}

export default UserGuard
