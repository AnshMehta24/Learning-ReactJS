import { createSlice } from '@reduxjs/toolkit'

//here "initialState" is a reserved keyword by redux.
const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        //There are three (3) actions you can perform
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            // console.log(action);
            
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            // console.log(action);
            
            state.value -= action.payload
        },
    }
})


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
  }

export default counterSlice.reducer