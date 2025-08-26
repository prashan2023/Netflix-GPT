import { createSlice } from "@reduxjs/toolkit";

const trailerSlice = createSlice({
    name: "trailer",
    initialState:{
        PosterId: null,
        TrailerKey: null,
        VedioState: false,
        VedioTitle: null,
        PublishedDate: null,
        MoreInfo: "This is so nice movie to watch"
    },
    reducers:{
        getPosterId: (state,action)=>{
           state.PosterId = action.payload
        },
        getTrailerKey: (state,action)=>{
            state.TrailerKey = action.payload
        },
        getVedioState: (state,action)=>{
            state.VedioState = action.payload
        },
        getVideoTitle: (state,action)=>{
            state.VedioTitle = action.payload
        },
        getPublishedDate: (state,action)=>{
            state.PublishedDate = action.payload;
        },
        getMoreInfo: (state,action)=>{
            state.MoreInfo = action.payload;
        }
    }
});

export const { getPosterId, getTrailerKey, getVedioState, getVideoTitle, getPublishedDate, getMoreInfo } = trailerSlice.actions;
export default trailerSlice.reducer;