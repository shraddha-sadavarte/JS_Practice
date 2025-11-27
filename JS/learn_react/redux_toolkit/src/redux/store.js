import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice.js";

export const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})