import { createSlice } from "@reduxjs/toolkit";
// created an slice witha ctions, reducers
const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: []
    }, 
    reducers:{
        addItem:(state,action) => {
           state.items.push(action.payload);
        },
        // filter the speciic index
        removeItem:(state,action)=>{
            state.items = state.items.filter((_, idx) => idx !== action.payload);
        },
        clearCart:(state,action) =>{
            state.items.length = 0; 
        }
    }
    
})

export const{addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;