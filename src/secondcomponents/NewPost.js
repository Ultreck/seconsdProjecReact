import React, { useRef, useState } from 'react';
import axios from 'axios';
import baseUrl from '../baseUrl';

const NewPost = () => {
      const [isLoading, setisLoading] = useState(false)
      const title = useRef();
      const more = useRef();
      const file = useRef();
    

      const handleSubmit = () => {
        const form = new FormData();
        form.append("more", more.current.value);
        form.append('title', title.current.value);
        form.append('file', file.current.files[0]);
        // console.log(file.current.files[0]);
          axios.post(baseUrl + "/new-post", form).then(res => {
            //     console.log(res);
            //     setisLoading(false)
          }).catch(err =>{
                 console.log(err);
            })

      }
     
  return (
    <>
           
<div className="py-20 grid gap-8 w-4/5  md:w-1/2 lg:w-1/4 text-center mx-auto bg-red-900/60 px-10 mt-32" >
      <h1 className="text-4xl text-white ">New Post</h1>
      <input placeholder="title" title="title" ref={title} name="title" type="text" className="text border rounded-full  px-4 py-2"/>
      <input placeholder="More" title="more" ref={more} name="more" type="text" className="text border rounded-full  px-4 py-2"/>
      <input  ref={file} name="file" type="file" className="text border rounded-full  px-4 py-2"/>
      <button className="text-white text-2xl bg-blue-500 px-4 py-1 text-center" onClick={handleSubmit} disabled={isLoading}>{isLoading? "Savings Post...": "Submit"}</button>
</div>
    </>
  )
}

export default NewPost