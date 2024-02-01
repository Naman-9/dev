import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser } from "./authApi";

const initialState = {
    status: 'idle',
    userData: null,
    isLoggedIn: false,
    error: null,
}

export const createUserAsync = createAsyncThunk(
    'auth/createUser',
    async(userData, {rejectWithValue}) => {
        try {
            const response = await createUser(userData);
            // The value we return becomes the `fulfilled` action payload
            return response.data;
        } catch (error) {
            // Handle rejection, action.payload will contain the value passed to rejectWithValue
            return rejectWithValue(error);
        }
    }
)

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createUserAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.userData = action.payload.user;
            })
            .addCase(createUserAsync.rejected, (state, action) => {
                state.status = 'fulfilled';
                state.error = action.payload;
            })
    }
});

export const selectUserData = (state) => state.auth.userData;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;