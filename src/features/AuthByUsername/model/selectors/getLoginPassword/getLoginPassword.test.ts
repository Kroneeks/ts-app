import { getLoginPassword } from './getLoginPassword';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginError.test', () => {
    it('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: 'password',
                isLoading: false,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });

    it('Empty field password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: false,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });

    it('Empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
