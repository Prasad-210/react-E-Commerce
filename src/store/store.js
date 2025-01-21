import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const appStore = configureStore({
    reducer:{
        cart: cartReducer,

        //multiple reducer you can add
        // payment:paymentReducer,
        // user:userReducer
    }
})

export default appStore;