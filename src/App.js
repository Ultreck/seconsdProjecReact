import React , {useState}from 'react'
import NewPost from './secondcomponents/NewPost';
import { Route, Routes } from 'react-router-dom';
import PostNavbar from './secondcomponents/PostNavbar';
import DisplayPost from './secondcomponents/DisplayPost';
import MainRoute from './components/MainRoute';
import One from './routes/One';
import UserGuard from './guard/UserGuard';
import Dashboard from './reduxComponents/Dashboard';
import Login from './components/Login';
import DisplayUser from './secondcomponents/DisplayUser';
import PostUsers from './secondcomponents/PostUsers';
import ProfileOne from './reduxComponents/ProfileOne';
import ProfileTwo from './reduxComponents/ProfileTwo';
import ProfileThree from './reduxComponents/ProfileThree';
import LoginUsers from './secondcomponents/LoginUsers';
import FormikYup from './formikYup/FormikYup';



const App = () => {
  const [data, setdata] = useState({})
  return (
    <>
    {/* <MainRoute/> */}
    {/* {/* <PostNavbar/> */}
    <PostNavbar/>
    <Routes>
        <Route path='/' element={<NewPost/>}/>
      <Route path='/formik' element={<FormikYup/>}/>
        <Route path='/post-user' element={<PostUsers setdata={setdata} />}/>
        <Route path='/display-blog' element={<DisplayPost/>}/>
        <Route path='/display-user' element={<DisplayUser/>}/>
        <Route path='/login' element={<LoginUsers/>}/>
        {/* <Route path='/profilslice' element={< data={data} />}/> */}
        <Route path='/mainroute' element={<MainRoute/>}/>
        <Route path='/profile-one' element={<ProfileOne/>}/>,
        <Route path='/profile-two' element={<ProfileTwo/>}/>,
        <Route path='/profile-three' element={<ProfileThree/>}/>
        <Route path='/main' element={<UserGuard/>} children={[
          // <Route path='profile-one' element={<ProfileOne/>}/>,
          // <Route path='profile-two' element={<ProfileTwo/>}/>,
          // <Route path='profile-three' element={<ProfileThree/>}/>,
          <Route path='dashboard' element={<Dashboard/>}/>,
          <Route path='one' element={<One/>}/>,
          
        ]} />
        <Route path='*' element={<div>Hello You must have routed to the edge of no existence</div>}/>,

    </Routes> 
    {/* <NewPost/> */}
    {/* <DisplayPost/> */}
    {/* <CustomHook/> */}
    {/* <Axios/> */}
    {/* <ComponentsInteraction/> */}
    {/* <Objects/> */}
    {/* <UsersData/> */}
    {/* <button className="text border rounded-full bg-blue-500 text-white px-6 py-1" onClick={mappingFunction}>Mapping Button</button>
      <div className="text">{myName}</div>
      <div className="text">{arrayOfItems.map((val, i) => (
        <div className="text">{i+1}. {val}</div>
      ))}</div>
      <div className="text">First Name: {userData.firstName}</div>
      <div className="text">Age: {userData.age}</div>
      <div className="text">Gender: {userData.gender}</div>
      <div className="text">School: {userData.school}</div>
        <table className="text border-collapse">
          <thead className="text">
            <th className="text px-10 ">First Name</th>
            <th className="text px-10 ">Age</th>
            <th className="text px-10 ">Gender </th>
          </thead>
        <tbody className="text">
      {allUsers.map((val, ind) => (
        <tr className="text">
          <td className="text px-10">{val.name}</td>
          <td className="text px-10">{val.age}</td>
          <td className="text px-10">{val.gender}</td>
        </tr>
      ))}
      </tbody>
      </table> */}
      {/* <Portfolio/> */}
    </>
  )
}

export default App

