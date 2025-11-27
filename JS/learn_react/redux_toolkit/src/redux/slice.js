import { createSlice } from "@reduxjs/toolkit"

const addToCart = createSlice({
    name:"cart",
    initialState: {
        items:[],
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload)
        }
    }
})

export const {addItem} = addToCart.actions
export default addToCart.reducer