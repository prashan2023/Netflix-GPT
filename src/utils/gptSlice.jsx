import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptToggleBoolean: true,
        gptMovies: null,
        movieResult: null
    },
    reducers:{
        getToggleBoolean:(state) =>{
            state.gptToggleBoolean = !state.gptToggleBoolean
        },
        getGptSearch: (state,action) =>{
            const {gptMovies,movieResult} = action.payload;
            state.gptMovies = gptMovies;
            state.movieResult = movieResult;
        }
    }
});

export const { getToggleBoolean,getGptSearch } = gptSlice.actions;
export default gptSlice.reducer;