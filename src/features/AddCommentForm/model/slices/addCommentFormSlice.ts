import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    text: undefined,
    error: undefined,
    isLoading: false,
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    // extraReducers: (builder) => {
    // builder.addCase(loginByUsername.pending, (state, action) => {
    // state.error = undefined
    // state.isLoading = true
    // })
    // builder.addCase(loginByUsername.fulfilled, (state, action) => {
    // state.isLoading = false
    // })
    // builder.addCase(loginByUsername.rejected, (state, action) => {
    // state.isLoading = false
    // state.error = action.payload as string
    // })
    // }
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
