import React, {useState, useEffect} from 'react';
import axios from 'axios';
import img from '../images/Spin-1s-299px.gif';
import baseUrl from '../baseUrl';
import {FaEllipsisV} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';


const DisplayPost = () => {

  const [backEndData, setbackEndData] = useState([])
  const [deleteIndex, setdeleteIndex] = useState()
  const [showMore, setshowMore] = useState(true)

  const getDataBase = () =>{
    axios.get( baseUrl + "/display-blog").then(res =>{
      // console.log(res.data[1].file);
      setbackEndData(res.data);
    }).catch(err => {console.log(err);});
   }
   
         useEffect(() => {
           getDataBase();
          //  console.log(backEndData);
         }, [])
  
         const handleDelete = (e) =>{
            console.log("Here is Delete Function");
            console.log(e);
          }
          const handleEdit = () =>{
           console.log("Here is Edit Function");

         }

         const handleMore = (e) => {
            console.log(e);
          backEndData.map((val, ind) =>(val._id === e?setshowMore(false):setshowMore(true)))
         }

  
  return (
    <>
        <div className="text w-full pt-20">
          {backEndData.length === 0? <img src={img} alt="" className="text mx-auto" />:

          <>
          {backEndData.map((val, index) => (
            <>
          <div className="flex justify-center py-6 w-full" key={index}>
            <div className="block rounded-lg shadow-lg bg-white w-full sm:w-4/5 md:w-3/5 lg:w-2/5 text-center">
              <div className="py-3 px-6 border-b border-slate-300 bg-slate-100 flex">
                <div className="text rounded-full border-2 border-blue-500 w-10 h-10">
                  <img src={`${baseUrl}/postImages/${val.filename}`} alt="postImage" className="text w-full h-full rounded-full" />
                </div>
                <h1 className="text-gray-900 text-xl font-medium  text-start mt-2 ml-4 w-3/4 mr-5 ">{val.title.substring(0, 30)}</h1>
          <div className=" ">
        <div>
        <div className="dropdown relative">
        <a className="dropstart relative" href="dropdownMenuButton2" type="button" data-bs-toggle="dropdown" aria-expanded="false"
        >
        <div className="text py-3 bg-none "><FaEllipsisV className="text w-full h-full "/></div>
       
      </a>
      <ul id="dropdownMenuButton2" className="dropdown-menu w-max absolute hidden  bg-white text-base z-50 float-right py-2  list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton2"
      >
          <li>
        <button className="text " onClick={handleDelete}>
            <a
                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="##"
              >Delete</a
            >
        </button>
          </li>
            <li>
              <button className="text" onClick={handleEdit}>
              <a
                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="##"
                >Edit</a
              >
              </button>
            </li>
      </ul>
    </div>
  </div>
</div>
           </div>
              <div className="p-6 ">
                  <img src={`${baseUrl}/postImages/${val.filename}`} alt="postImage" className="text w-full h-96" />
              </div>
              <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
              <p className="text-gray-700 text-start mb-4 text-lg">
                {/* <input type="text" value={index} className="text hidden" /> */}
                {val.more.length > 100 && showMore? <span className="text">{val.more.substring(0, 100)}... <button onClick={() =>handleMore(val._id)} className="text-blue-500 font-sans" >More</button> </span> : <span className="text">{val.more}</span> }
                </p>
              <p className="text-end">{val.time.substring(0, 10)}</p>
              </div>
              </div>
          </div>
            </>
          ))}
        </>
        }
        </div>
    </>
  )
}

export default DisplayPost