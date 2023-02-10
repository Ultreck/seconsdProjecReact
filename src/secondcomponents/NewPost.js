import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useAxios } from '../components/useAxios';

const NewPost = () => {
  // const {postAxios, getAxios} = useAxios();
      const [isLoading, setisLoading] = useState(false)
      const title = useRef();
      const more = useRef();
      const picture = useRef();
      // const URL = "http://localhost:5000/new-post"
    

      const handleSubmit = () => {
        const form = new FormData();
        form.append(more, more.current.value);
        form.append(title, title.current.value);
        form.append(picture, picture.current.files[0]);
        // const data = {title:title.current.value, more:more.current.value, filename:imgfile.current.value}
        // console.log(picture.current.files[0]);
        // console.log(form);
      
        // setisLoading(true);
        // let blog = postAxios(URL, data);
        
        axios.post("http://localhost:5000/new-post", form).then(res => {
            console.log(res);
            setisLoading(false)
      }).catch(err =>{
           console.log(err);
      })
      }
     
  return (
    <>
           
<div className="py-20 grid gap-8 w-4/5  md:w-1/4 text-center mx-auto bg-red-900/60 px-10 mt-20" >
      <h1 className="text-4xl text-white ">New Post</h1>
      <input placeholder="title" title="title" ref={title} name="title" type="text" className="text border rounded-full  px-4 py-2"/>
      <input placeholder="More" title="more" ref={more} name="more" type="text" className="text border rounded-full  px-4 py-2"/>
      <input  ref={picture} name="more" type="file" className="text border rounded-full  px-4 py-2"/>
      <button className="text-white text-2xl bg-blue-500 px-4 py-1 text-center" onClick={handleSubmit} disabled={isLoading}>{isLoading? "Savings Post...": "Submit"}</button>
</div>
    </>
  )
}

export default NewPost