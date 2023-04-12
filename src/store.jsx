import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./features/fetchSlice";

const store = configureStore({
    reducer: {
        fetch: fetchReducer
    }
})

export default store