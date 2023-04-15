import { createSlice } from '@reduxjs/toolkit';
import { getPostData, getSubredditsData } from '../API/apiCall';


export const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        posts: "",
        subReddit: 'popular',
        subReddits: '',
        isLoading: true,
        isError: false,
        subIsLoading: true,
        subIsError: false,
        searchInput: ""
    },
    reducers: {
        fetchPosts: (state, action) => {
            if (action.payload){
                state.subReddit = action.payload
            } else {
                return state
            }
            
        },
        definePost: (state, action) => {
            state.posts = action.payload
        },
        updateInput: (state, action) => {
            state.searchInput = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPostData.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(getPostData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.posts = action.payload
        })
        .addCase(getPostData.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
        .addCase (getSubredditsData.pending, (state) => {
            state.subIsLoading = true;
            state.subIsError = false;
        })
        .addCase(getSubredditsData.fulfilled, (state, action) => {
            state.subIsLoading = false;
            state.subIsError = false;
            state.subReddits = action.payload
        })
        .addCase(getSubredditsData.rejected, (state) => {
            state.subIsLoading = false;
            state.subIsError = true;
        })
    }
})

export const { fetchPosts, definePost, updateInput } = fetchSlice.actions
export default fetchSlice.reducer