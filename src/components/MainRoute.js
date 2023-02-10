import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const MainRoute = () => {
      const {username} = useParams();
  return (
    <div>
      <Outlet/>
     <p className="text">Here is the params of the application {username}</p>
    </div>
  )
}

export default MainRoute