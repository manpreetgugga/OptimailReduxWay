import { createAction, createReducer } from '@reduxjs/toolkit'
import {increment,decrement} from '../Actions/ActionTypes'

interface CounterState {
    value: number
  }

export const incrementAction = createAction(increment)
export const decrementAction = createAction(decrement)

const initialState : CounterState = { value: 0 }

const counterReducer = createReducer(initialState,(builder)=>{
  builder.addCase(incrementAction, (state,action) => {
    console.log("incre red")
      state.value ++
  }).addCase(decrementAction,(state,action) =>{
    console.log("decr red")
    state.value--
  }).addDefaultCase((state,action)=>{

  })
})

export default counterReducer