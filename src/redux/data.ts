import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userData from './actions';

interface User {
    id: number;
    name: string;
    email: string;
    login: string;
    phone: string;
}

interface UserState {
    data: User[];
    loading: boolean;
    error: string | null;
}


const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        loading: false,
        error: null,
    } as UserState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(userData.pending, (state) => {
                state.loading = true; 
                state.error = null; 
            })
            .addCase(userData.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.loading = false; 
                state.data = action.payload; 
            })
            .addCase(userData.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.error.message || 'Unknown error'; 
            });
    },
});

export default userSlice.reducer;
