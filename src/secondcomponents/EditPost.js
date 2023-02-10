import React from 'react'

const EditPost = (props) => {
  return (
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

export default EditPost