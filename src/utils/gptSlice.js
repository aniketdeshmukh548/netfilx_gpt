import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showgptSearch:false
    },
    reducers:{
        showGptsearchView:(state,action)=>{
            state.showgptSearch=!state.showgptSearch
        }
    }
})

export const {showGptsearchView}= gptSlice.actions
export default gptSlice.reducer;