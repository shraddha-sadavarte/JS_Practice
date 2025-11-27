import { createSlice } from "@reduxjs/toolkit"

const addToCart = createSlice({ //createSlice created a cart store for us
    name:"cart",
    initialState: { //initial state of the cart
        items:[],
    },
    reducers:{
        addItem:(state, action)=>{ //a function that add product details to the cart
            state.items.push(action.payload) //action.payload contains the product in json format, so every click pushes a new product into items array
        },

        removeItem: (state, action) => {
            const index = action.payload; // Index of the item to be removed
            state.items = state.items.filter((item) => item.id !== index);
        }
    }
})

export const {addItem, removeItem} = addToCart.actions
export default addToCart.reducer

//Global cart storage is ready with addItem function to add products to the cart