import React, { useState, useEffect } from 'react';

import { useStorage } from '../useStorage'

const CustomHook = () => {
      const [data, setdata] = useState([])
      const [isLoading, setisLoading] = useState(false)
      const {getIt, setIt} = useStorage();

      useEffect(() => {
       if(localStorage.data){
            setdata(getIt("data"));
       }
      }, [])
      
  return (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis animi tempora, quasi similique fugiat dignissimos itaque voluptatum repudiandae tempore natus. Repellendus nihil iusto dignissimos enim voluptates eos sapiente voluptatibus!
    </div>
  )
}

export default CustomHook
