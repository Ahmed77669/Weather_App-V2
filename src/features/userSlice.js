import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: true,
};

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        loginUser: (state, action) =>{
            state.user = action.payload;
        },
        setLoading: (state, action) =>{
            state.isLoading = action.payload;
        },
    }
})