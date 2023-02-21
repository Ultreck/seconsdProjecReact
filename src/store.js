import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/CouterSlice";
import { profileReducer } from "./slices/ProfileSlice";


const store = configureStore({
      reducer: {
            counter: counterReducer,
            profile: profileReducer,
      }
})
export default store;