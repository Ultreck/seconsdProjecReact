import { createSlice } from '@reduxjs/toolkit'

      const ProfilSlice = createSlice({
            initialState: {
                  firstname: 'Emmanuel',
                  lastname: 'Oluwatayese',
                  email: 'example@gmail.com'
            },
            name:'profile',
            reducers:{
                  setProfile: (state, {payload})=>{
                        state = {...state, ...payload}
                         return state;
                  }
            }
      
      })


export const profileReducer =  ProfilSlice.reducer;
export const {setProfile} = ProfilSlice.actions
