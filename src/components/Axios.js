import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Axios = () => {

      
      
      const [axiosArra, setaxiosArra] = useState([])
      const [axiosArra2, setaxiosArra2] = useState([])
      let URL = "https://jsonplaceholder.typicode.com/users";
      let URL2 = "https://api.github.com/users";

      const getAxiosData = () => {
            axios.get(URL).then((res) =>{
                  setaxiosArra(res.data)
                  // console.log(res.data);
                  console.log(axiosArra);
            }).catch((err) =>{
                  console.log("Error ni now");
            });
      }
      const getAxiosData2 = () => {
            axios.get(URL2).then((res) =>{
                  setaxiosArra2(res.data)
                  // console.log(res.data);
                  console.log(axiosArra2);
            }).catch((err) =>{
                  console.log("Error ni now");
            });
      }
      
      useEffect(() => {
            getAxiosData();
            getAxiosData2();
      }, [])
      
  return (
    <div>
      {/* <button className="text bg-blue-400 hover:bg-blue-500 px-10 py-1 w-1/4  mt-20 ml-20 rounded-full" onClick={getAxiosData}>Get Data</button> */}
      <table className="text border border-collapse" align='center'>
            <thead className="text">
                  <tr className="text">
                        <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">id</th>
                        <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">name</th>
                        <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">Surname</th>
                        <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">email</th>
                        <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">phone</th>
                        <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">website</th>
                  </tr>
            </thead>
            {
            axiosArra.length === 0? <div className="text-white text-2xl mt-10 absolute top-0 text-center">Loading...</div>:
            axiosArra.map((val, ind) => (
                  <tbody className="text-white">
                        <tr className="text-sm text-center border border-slate-300 px-10 py-2 bg-slate-100">
                              <td className="text border border-slate-500 px-5 py-2 bg-slate-700">{val.id}</td>
                              <td className="text border border-slate-500 px-5 py-2 bg-slate-700">{val.name}</td>
                              <td className="text border border-slate-500 px-5 py-2 bg-slate-700">{val.username}</td>
                              <td className="text border border-slate-500 px-5 py-2 bg-slate-700">{val.email}</td>
                              <td className="text border border-slate-500 px-5 py-2 bg-slate-700">{val.phone}</td>
                              <td className="text border border-slate-500 px-5 py-2 bg-slate-700">{val.website}</td>
                        </tr>
                  </tbody>
            ))}
            </table>

            <div className="text">{
            axiosArra2.map((val, ind) => (
                  <div className="text">
                        <div className="text w-1/4 h-3/5">
                              <img src={val.avatar_url} alt="" className="text w-full h-2/3" />
                               <div className="text">{val.login}</div>
                        </div>
                  </div>

            ))}
            </div>
    </div>
  )
}

export default Axios