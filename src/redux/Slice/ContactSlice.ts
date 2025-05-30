import { createSlice } from "@reduxjs/toolkit";

interface IContact {
    blink:boolean;
}

const initialState:IContact = {
    blink:false,
}

export const contactSlice = createSlice({
    name:"eventContact",
    initialState,
    reducers:{
        setBlink(state,action){
            state.blink = action.payload
        }
    }
})

export const { setBlink } = contactSlice.actions