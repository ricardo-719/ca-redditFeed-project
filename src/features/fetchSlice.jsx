import { createSlice } from '@reduxjs/toolkit';

export const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        posts: "",
        subReddit: 'popular',
        isLoading: true,
        isError: false,
        searchInput: ""
    },
    reducers: {
        fetchPosts: (state, action) => {
            if (action.payload){
                state.subReddit = action.payload
            } else {
                return state.subReddit
            }
            
        },
        updateInput: (state, action) => {
            state.searchInput = action.payload
        }
    }
})

export const { fetchPosts, updateInput } = fetchSlice.actions
export default fetchSlice.reducer