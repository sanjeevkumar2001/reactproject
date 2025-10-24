import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js"

// created an store
const appStore = configureStore({
   reducer:{
       cart: cartReducer
   }
})

export default appStore;