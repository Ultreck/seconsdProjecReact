import React, { useState, useEffect, useRef } from 'react';
import { socket } from '../baseUrl';


const LearnSocket = () => {
      const [chatArr, setchatArr] = useState([])
      const _id = 'adlfkj009947778837774bn';
      useEffect(() => {
            socket.emit("join_socket", {_id })
            // socket.emit('user_active', 'One user is active' );
            socket.on('message_sent', (chat) =>{
                  const exists = chatArr.find(each => each.id === chat.id);
                  if(!exists){setchatArr((chats) => [...chats, chat])}
                  console.log(chatArr);
                  console.log(chat);
            })
            socket.on('msg_sent_to_group', (chat) =>{
                  setchatArr((chats) => [...chats, chat]);
                  console.log(chat);
            })
      }, [])
      
      const message = useRef();
      const react = useRef();
      const angular = useRef();
      const vue = useRef();
      
      const sendMessage = () =>{
            const chat = {
                  id: Math.floor(Math.random() * 1000000),
                  text: message.current.value,
                  time: new Date().toLocaleTimeString()
            }
            setchatArr([...chatArr, chat]);
            socket.emit('send_message', chat);
            message.current.value = "";
      }
const joinGroup = (e) =>{
      socket.emit("join_group", e);
}
const messgToGroup = (group, message, e) =>{
      e.preventDefault();
      const chat = {
            id: Math.floor(Math.random() * 1000000),
            msg:message,
            time: new Date().toLocaleTimeString()
      }
      socket.emit('send_msg_to_group', {group, chat})
      // console.log(group, message);
}
   return (
    <div className='mx-auto mt-40 shadow p-5 rouded max-w-sm'>
      <div className="text max-h-[100px] overflow-auto">
            {chatArr.map(({text, time}) =>(
                  <div className="text p-2 my-2 rounded border">{text}{time}</div>
            ))}
      </div>
      <input type="text" placeholder='Message here' ref={message} className="text w-full rounded p-1 my-2 border outline-none" />
      <button className="text w-full my-2 bg-gray-200 p-1 rounded" onClick={sendMessage} >Interact</button>

      <div className="text gap-2 mt-10 grid grid-cols-3">
            <form onSubmit={(e) =>messgToGroup("react", react.current.value, e)} className="text">
                  <input type="text" placeholder='react message' ref={react}  className="text w-full rounded p-1 my-2 border outline-none" />
            </form>
            <form onSubmit={(e) =>messgToGroup("angular", angular.current.value, e)} className="text">
                  <input type="text" placeholder='angular message' ref={angular} className="text w-full rounded p-1 my-2 border outline-none" />
            </form>
            <form onSubmit={(e) =>messgToGroup("vue", vue.current.value, e)} className="text">
                  <input type="text" placeholder='vue message' ref={vue} className="text w-full rounded p-1 my-2 border outline-none" />
            </form>
      <button className="text w-full my-2 bg-gray-200 p-1 rounded" onClick={() =>joinGroup("react")} >+ReactJs</button>
      <button  className="text w-full my-2 bg-gray-200 p-1 rounded" onClick={() =>joinGroup("angular")} >+AngularJs</button>
      <button  className="text w-full my-2 bg-gray-200 p-1 rounded" onClick={() =>joinGroup("vue")} >+Vue</button>
      </div>
    </div>
  )
}

export default LearnSocket
