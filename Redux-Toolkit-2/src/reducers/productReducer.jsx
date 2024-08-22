import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const initialState ={
    products:[]
}

export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getProducts:(state, action) =>{
            // axios.get("https://fakestoreapi.com/products").then((res) =>{
            //     console.log(res);
            //     state.products = res.data; // we cannot do like this in redux because it throws error because it is async.
            // }).catch((err)=>{
            //     console.log(err);              
            // })
            // console.log(action);
            state.products = action.payload
            
        }
    }
})


export default productSlice.reducer;

export const {getProducts} = productSlice.actions;