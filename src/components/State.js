import React, { useState } from 'react';


const State = () => {
      const [currentState, setcurrentState] = useState("Esther")
      
      const logSomething = (e) => {
        console.log(currentState);
            // setcurrentState(e.target.value)
      }
  return (
    <div className='text-center mt-20 gap-4 grid  justify-items-center'>
            <input value={currentState} onChange={(e) =>setcurrentState(e.target.value)} type="text" className="text border rounded-full px-4 py-1" />
            <button className="text bg-blue-500 text-white px-4 py-1 rounded " onClick={logSomething}>I'm a button</button>
    </div>
  )
}

export default State
