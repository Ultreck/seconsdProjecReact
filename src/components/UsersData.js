import React, { useState, useEffect, useRef } from 'react';
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/fa/plus';
import {edit} from 'react-icons-kit/feather/edit';
import {trash2} from 'react-icons-kit/feather/trash2'
import { useStorage } from '../useStorage';

const UsersData = () => {
      const {getIt, setIt} = useStorage();
      const [formArray, setformArray] = useState([])
      const [formData, setFormData] = useState({firstname: '', lastname: '', age: '', email: '', password: '', dept: '' });
      const [formclassName, setformclassName] = useState("text  justify-center flex w-full hidden");
      const [condition, setcondition] = useState(true)
      const [actualIndex, setactualIndex] = useState();
      const [editedFormData, seteditedFormData] = useState({})
          
          const handleInputChange = (event) => {
                const { name, value } = event.target;
                setFormData({ ...formData, [name]: value });
            }
            useEffect(() => {
                  if(localStorage.Users){
                        let localData = getIt("Users");
                        setformArray(localData);
                  };

            }, [formData])
            

            const handleSubmit = (event) => {
                  event.preventDefault();
                  setformclassName("text justify-center flex w-full hidden");
                  setIt("Users", [...formArray, formData]);
                  setcondition(false);
                  setFormData({firstname: '', lastname: '', age: '', email: '', password: '', dept: '' });
            }
            
            const handleDelete = (index) =>{
                  if(window.confirm("Are you sure you want to delete this?")){
                        let localData =  getIt("Users");
                        let found = localData.filter((val, ind) => (ind !== index));
                        setIt("Users", found);
                        setformArray(found);
                   alert("Deleted");
            }
            else{
                  alert("Delete Cancelled");
            }
          }

          const handleEdit = (index) => {
            setactualIndex(index);       
            let found = formArray.find((val, ind) =>(ind === index));
            seteditedFormData(found);
      }
      
      const handleEditChanges = (e) => {
            seteditedFormData({...editedFormData, [e.target.name]: e.target.value});

      }
      
      
      const handleSaveChanges = () => {
            let localData =  getIt("Users");
            localData[actualIndex] = editedFormData;
            localStorage.setItem("Users", JSON.stringify(localData));
            setFormData(localData)
            
          }

          const displayForm = () => {
            if(condition === true){
                  setformclassName("text justify-center grid justify-items-center self-center flex w-full hidden");
                  setcondition(false);
            }
            else{
                  setformclassName("text grid justify-items-center  w-full");
                  setcondition(true);
            }
          }
      
  return (
      <>
      <div className="text-end bg-slate-600 md:pr-20 text-sm h-16 px-8 py-2 shadow-lg">
            <button className="text "  onClick={displayForm}>
                   <Icon className='relative text-white mt-2' size={25} icon={plus} title='add data' />
            </button>
      </div>
      <div className={formclassName}>
            <form onSubmit={handleSubmit} className='grid w-full mx-auto md:w-1/3 gap-4  bg-slate-800 border-slate-500 border-2 mt-20 p-10 drop-shadow-xl z-50 absolute'>
                        <input name="firstname" className='text border outline-blue-600 bg-slate-200  rounded-full px-5 py-2' type="text" value={formData.firstname} placeholder='First name' onChange={handleInputChange}/>
                        <input name="lastname" className='text border outline-blue-600 bg-slate-200  rounded-full px-5 py-2' type="text" value={formData.lastname} placeholder='Last name' onChange={handleInputChange}/>
                        <input name="age" className='text border outline-blue-600 bg-slate-200  rounded-full px-5 py-2' type="text" value={formData.age} placeholder='Age' onChange={handleInputChange}/>
                        <input name="email" className='text border outline-blue-600 bg-slate-200  rounded-full px-5 py-2' type="text" value={formData.email} placeholder='Email' onChange={handleInputChange}/>
                        <input name="password" className='text border outline-blue-600 bg-slate-200  rounded-full px-5 py-2' type="text" value={formData.password} placeholder='Password' onChange={handleInputChange}/>
                        <input name="dept" className='text border outline-blue-600 bg-slate-200  rounded-full px-5 py-2' type="text" value={formData.dept} placeholder='Department' onChange={handleInputChange}/>
                        <input className='text-white font-bold text-2xl border  rounded-full px-5 py-1 w-2/3 text-center mx-auto bg-blue-600' type="submit" value="Submit" />
            </form>
      </div>
            <div className="text">
                  {/* <div className="text w-2/3 h-16 bg-slate-100 mx-auto z-50 shadow-lg absolute  justify-items-center align-middle"></div> */}
                  <table className="text mt-20 border-collapse drop-shadow-xl shadow-slate-800" align='center'>
                        <thead className="text">
                              <tr className="text gap-8">
                                    <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">First Name</th>
                                    <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">Last Name</th>
                                    <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">Age</th>
                                    <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">Email</th>
                                    <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">Password</th>
                                    <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">Department</th>
                                    <th className="text-white border border-slate-700 px-3 py-2 bg-slate-900">Actions</th>
                                    
                              </tr>
                        </thead>
                        {formArray.map((val, ind) => (
                              <tbody className="text-white" key={ind}>
                                    <tr className="text-sm text-center border border-slate-300 px-10 py-2 bg-slate-100">
                                          <td className="text border border-slate-500 px-2 py-2 bg-slate-700">{val.firstname}</td>
                                          <td className="text border border-slate-500 px-2 py-2 bg-slate-700">{val.lastname}</td>
                                          <td className="text border border-slate-500 px-2 py-2 bg-slate-700">{val.age}</td>
                                          <td className="text border border-slate-500 px-2 py-2 bg-slate-700">{val.email}</td>
                                          <td className="text border border-slate-500 px-2 py-2 bg-slate-700">{val.password}</td>
                                          <td className="text border border-slate-500 px-2 py-2 bg-slate-700">{val.dept}</td>
                                          <td className="text-black border border-slate-500 px-2 py-2 bg-slate-700">
                                                <button className=" px-4 py-1 hover:scale-125" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={()=>handleEdit(ind)}> <Icon className='relative text-yellow-500 hover:text-yellow-400 ' size={15} icon={edit} title='edit' /></button>
                                                <button className=" px-4 py-1  hover:scale-125" onClick={()=>handleDelete(ind)}> <Icon className='relative text-red-500  hover:text-red-400' size={15} icon={trash2} title='delete' /></button>
                                          </td>
                                    </tr>
                              </tbody>
                        ))}
                  </table>
                  <EditFunction handleSubmit={handleSubmit} handleInputChange={handleInputChange} editedFormData={editedFormData} handleEditChanges={handleEditChanges} handleSaveChanges={handleSaveChanges} />
            </div>
      </>
  )
}

const EditFunction = (props) => {
      // const modal = useRef();
      // const [editedFormData, seteditedFormData] = useState({})
  return(
      <>
<div className="modal  fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalSmLabel" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-sm relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalSmLabel">
         Edit form 
        </h5>
        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body relative p-4">
      <div className="text justify-center flex w-full " >
            <form className='grid w-full gap-4   p-10 z-50'>
                        <input name="firstname" className='text border  rounded-full px-5 py-1 outline-blue-500' type="text" value={props.editedFormData.firstname} placeholder='First name' onChange={props.handleEditChanges}/>
                        <input name="lastname" className='text border  rounded-full px-5 py-1 outline-blue-500' type="text" value={props.editedFormData.lastname} placeholder='Last name' onChange={props.handleEditChanges}/>
                        <input name="age" className='text border  rounded-full px-5 py-1 outline-blue-500' type="text" value={props.editedFormData.age} placeholder='Age' onChange={props.handleEditChanges}/>
                        <input name="email" className='text border  rounded-full px-5 py-1 outline-blue-500' type="text" value={props.editedFormData.email} placeholder='Email' onChange={props.handleEditChanges}/>
                        <input name="password" className='text border  rounded-full px-5 py-1 outline-blue-500' type="text" value={props.editedFormData.password} placeholder='Password' onChange={props.handleEditChanges}/>
                        <input name="dept" className='text border  rounded-full px-5 py-1 outline-blue-500' type="text" value={props.editedFormData.dept} placeholder='Department' onChange={props.handleEditChanges}/>
                        {/* <input className='text-white font-bold text-2xl border  rounded-full px-5 py-1 w-2/3 text-center mx-auto bg-blue-600' type="submit" value="Submit" /> */}
            </form>
      </div>
      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button onClick={props.handleSaveChanges} type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Save changes
        </button>
      </div>
      </div>
    </div>
  </div>
</div>
      </>
  )
}

export default UsersData
