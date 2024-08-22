import {configureStore} from "@reduxjs/toolkit"
import userSlice  from "../reducers/useReducer"
import productReducer from "../reducers/productReducer"

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        productReducer : productReducer
    }
})