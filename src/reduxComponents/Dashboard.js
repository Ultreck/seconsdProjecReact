import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from '../slices/CouterSlice';

const Dashboard = () => {
      const state = useSelector((state) => state.counter);
      const dispatch = useDispatch();
      const click = () =>{
            dispatch(increase())
      }
      console.log(state);
  return (
    <div>
      <div className="text">
            <div className="text">{state.count}</div>
            <button className="text bg-blue-500/70 px-10 py-1" onClick={click}>Increase</button>
      </div>
    </div>
  )
}

export default Dashboard