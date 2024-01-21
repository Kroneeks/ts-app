import { getLoginIsLoading } from './getLoginIsLoading';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginError.test', () => {
    it('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: false,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });

    it('Empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
