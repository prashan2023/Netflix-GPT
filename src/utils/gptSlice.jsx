import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptToggleBoolean: true,
    },
    reducers:{
        getToggleBoolean:(state) =>{
            state.gptToggleBoolean = !state.gptToggleBoolean
        }
    }
});

export const { getToggleBoolean } = gptSlice.actions;
export default gptSlice.reducer;