import axios from 'axios';
import React, {useRef, useState} from 'react';
import baseUrl from '../baseUrl';


const LoginUsers = () => {
      const [userData, setuserData] = useState({email: "", password: ""});
      const handleChanges = (e) =>{
            const {name, value} = e.target
            setuserData({...userData, [name]:value})
            // console.log(userData);
      }

      const handleLoginUser = () => {
            axios.post(baseUrl + "/login", userData).then(res => {
              //     console.log(res);
              //     setisLoading(false)
            }).catch(err =>{
                   console.log(err);
              })
  
        }
  return (
    <>
                        
<div className="py-20 grid gap-8 w-4/5  md:w-1/2 lg:w-1/4 text-center mx-auto bg-orange-900/60 px-10 mt-20" >
      <h1 className="text-4xl text-white ">Login Form</h1>
      <input  name="email" onChange={handleChanges} value={userData.email} type="email" placeholder='Email' className="text border rounded-full  px-4 py-2"/>
      <input  name="password" onChange={handleChanges} value={userData.password} type="password" placeholder='Password' className="text border rounded-full  px-4 py-2"/>
      <button className="text-white text-2xl bg-orange-500 px-4 py-1 text-center" onClick={handleLoginUser} >Login</button>
</div>  
    </>
  )
}

export default LoginUsers
