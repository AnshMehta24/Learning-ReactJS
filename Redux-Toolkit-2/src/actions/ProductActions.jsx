import axios from "axios"
import { getProducts } from "../reducers/productReducer";

//higherOrder Function
export const asyncgetProducts =() => async (dispatch, getState) =>{
    // console.log(getState );
    
    try {
        const res = await  axios.get("https://fakestoreapi.com/products");

        dispatch(getProducts(res.data));
    } catch (error) {
        console.log(error);
        
    }
}