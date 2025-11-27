import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice.js";

export const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})

//it creates a redux store 
//registering cart reducer to the store so that it can manage cart state
//Makes the items array available globally to all components
//Now we can use useSelector and useDispatch hooks in any component to interact with the cart state