import { createSlice } from '@reduxjs/toolkit'

const CouterSlice = createSlice({
      initialState:{
            count:0,
      },
      name: "counter", 
      reducers:{
            increase: (state) => {
                  state = {count: state.count + 1}
                  return state
            },
            increaseByAmount: (state, {payload}) => {
                  state = {count: state.count + payload}
                  return state
            }
      }
      }) 

export  const counterReducer = CouterSlice.reducer
export  const {increase, increaseByAmount} = CouterSlice.actions
