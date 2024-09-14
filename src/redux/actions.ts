import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from '../api/fetchData';
import { UserData } from './types';
const userData = createAsyncThunk(
    'users/fetchData', 
    async (data: UserData, { rejectWithValue }) => {
        try {
            const response = await fetchData(data);
            return response;
        } catch (error: unknown) { 
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
    
);

export default userData;