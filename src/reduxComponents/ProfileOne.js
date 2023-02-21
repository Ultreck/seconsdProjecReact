import React, {useState} from 'react'
import CounterNarv from './CounterNarv'
import { useDispatch, useSelector } from 'react-redux'
import { setProfile } from '../slices/ProfileSlice';


const ProfileOne = () => {
      const {counter, profile} = useSelector((state) => state);
      const [user, setuser] = useState(profile)


      const dispatch = useDispatch();
      
      const handleChange = (e) =>{
            const {value, name} = e.target;
            setuser({...user, [name]:value})
            dispatch(setProfile({...user, [name]:value}));
      }
      const handleSubmit = () =>{
            dispatch(setProfile(user));
      }

  return (
    <div>
      <CounterNarv/>
      <div className="text mt-10 px-20">
            <div className="text">{user.firstname}</div>
            <input type="text px-5 py-2 " className="text border" name='firstname' value={user.firstname} onChange={handleChange}/>
            <input type="text px-5 py-2 " className="text border" name='lastname' value={user.lastname} onChange={handleChange}/>
            <input type="email px-5 py-2 " className="text border" name='email' value={user.email} onChange={handleChange}/>
            <button  className="text" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default ProfileOne
