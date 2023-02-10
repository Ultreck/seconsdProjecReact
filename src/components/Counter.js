import React, { useState } from 'react';

const Counter = () => {
      const [increaseCount, setincreaseCount] = useState(0)
      // const [decreaseCount, setdecreaseCount] = useState()
      const counterPlusFunct = () =>{
            setincreaseCount(increaseCount +1)
      }
      const counterMinusFunct = () =>{
            if(increaseCount >= 1){
                  setincreaseCount(increaseCount - 1)
            }
            else{
                  setincreaseCount(increaseCount )

            }
            // Using short circuit conditional statement
            // increaseCount > 0 && setincreaseCount(increaseCount -1)
            
      }
  return (
    <div className='text-center mt-20 gap-4 grid  justify-items-center'>
      <input type="text" value={increaseCount} className="text-3xl font-mono border rounded-full px-4 py-1 text-center" />
      <div className="text gap-4">
            <button className="text mx-5 bg-blue-500 text-white px-4 py-1 rounded " onClick={counterPlusFunct}>Add Counter</button>
            <button className="text bg-red-500 text-white px-4 py-1 rounded " onClick={counterMinusFunct}>Subtract Counter</button>
      </div>
    </div>
  )
}

export default Counter
