import React, { useState, useEffect } from 'react';


const ComponentsInteraction = () => {
      const [counter, setcounter] = useState(0)
      const name = "Emmanuel Oluwatayese";
      const users = {
            name: "Adeyemin",
            department: "Software Engineering",
            school: "SQI"
      };
      const user = [];
      const check = () => {
        console.log('Hello World');
      }
      const addCounter = () => {
            setcounter(counter + 1)
      }
      const subtrCounter = () => {
            counter > 0 ? setcounter(counter - 1):setcounter(counter);
      }
      useEffect(() => {
            check();
      }, [counter])
      
  return (
    <div>
      <div className="text font-mono font-bold text-2xl text-center">{counter}</div>
      <Child name={name} users={users} user={user} check={check} addCounter={addCounter} subtrCounter={subtrCounter} />
    </div>
  )
}

const Child = (props) =>{
return(
      <>
            {/* <h1 className="text">{props.name}</h1> */}
            <h1 className="text">Name: {props.users.name}</h1>
            <h1 className="text">School: {props.users.school}</h1>
            <h1 className="text">Department: {props.users.department}</h1>
            {props.user.map}
            {/* <button className="text bg-blue-600 p-2 rounded text-white w-20" onClick={props.check} >Triger</button> */}
            <button className="text bg-blue-600 p-2 rounded text-white mx-3 text-center ml-20" onClick={props.addCounter} >Add Counter</button>
            <button className="text bg-red-600 p-2 rounded text-white mx-3 text-center ml-20" onClick={props.subtrCounter} >Subtract Counter</button>
      </>
)
}
export default ComponentsInteraction