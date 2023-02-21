import React, {useRef, useState} from 'react';
import axios from 'axios';
import baseUrl from '../baseUrl';

const PostUsers = ({setdata}) => {
      const [isLoading, setisLoading] = useState(false)
      const [userData, setuserData] = useState({firstname: "", lastname: "", email: "", password: ""})
      
      const handleChanges = (e) =>{
            const {name, value} = e.target
            setuserData({...userData, [name]:value})
            setdata({...userData, [name]:value})
            // console.log(userData);
      }

      const handleSubmitUser = () => {
          axios.post(baseUrl + "/register", userData).then(res => {
            //     console.log(res);
            //     setisLoading(false)
          }).catch(err =>{
                 console.log(err);
            })

      }
  return (
    <>
                   
<div className="py-20 grid gap-8 w-4/5  md:w-1/2 lg:w-1/4 text-center mx-auto bg-blue-900/60 px-10 mt-20" >
      <h1 className="text-4xl text-white ">Login Form</h1>
      <input placeholder="First Name" title="first name" name="firstname" onChange={handleChanges} value={userData.firstname} type="text" className="text border rounded-full  px-4 py-2"/>
      <input placeholder="Last Name" title="last name" name="lastname" onChange={handleChanges} value={userData.lastname} type="text" className="text border rounded-full  px-4 py-2"/>
      <input  name="email" onChange={handleChanges} value={userData.email} type="email" placeholder='Email' className="text border rounded-full  px-4 py-2"/>
      <input  name="password" onChange={handleChanges} value={userData.password} type="password" placeholder='Password' className="text border rounded-full  px-4 py-2"/>
      <button className="text-white text-2xl bg-orange-500 px-4 py-1 text-center" onClick={handleSubmitUser} disabled={isLoading}>{isLoading? "Savings Post...": "Submit"}</button>
</div>  
    </>
  )
}

export default PostUsers
