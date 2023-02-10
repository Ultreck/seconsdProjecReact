import React , {useState}from 'react'
import NewPost from './secondcomponents/NewPost';
import { Route, Routes } from 'react-router-dom';
import PostNavbar from './secondcomponents/PostNavbar';
import DisplayPost from './secondcomponents/DisplayPost';
import MainRoute from './components/MainRoute';
import One from './routes/One';


const App = () => {
 
  return (
    <>
    {/* <MainRoute/> */}
    {/* {/* <PostNavbar/> */}
    <PostNavbar/>
    <Routes>
        <Route path='/' element={<NewPost/>}/>
        <Route path='/display' element={<DisplayPost/>}/>
        <Route path='/main/:username' element={<MainRoute/>}/>
        <Route path='/main' element={<MainRoute/>} children={[
          <Route path='one' element={<One/>}/>,
          
        ]} />
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

