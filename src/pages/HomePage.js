import React from 'react'
import PostNavbar from '../components/PostNavbar'
import NewPost from '../components/NewPost'
import DisplayPost from '../components/DisplayPost'

const HomePage = () => {
  return (
    <div>
            <NewPost/>
            <DisplayPost/>
    </div>
  )
}

export default HomePage