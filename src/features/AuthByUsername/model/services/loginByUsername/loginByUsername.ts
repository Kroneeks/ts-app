import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { type User } from '@/entities/User/model/types/user';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.post<User>('/login', authData);

        if (!response.data) {
            throw new Error();
        }
        dispatch(userActions.setAuthData(response.data));

        extra.navigate?.('/about');

        return response.data;
    } catch (err) {
        return rejectWithValue('error');
    }
});
