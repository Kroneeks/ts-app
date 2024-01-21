import { type DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { type LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    it('Test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('test'),
                // eslint-disable-next-line
            ),
        ).toStrictEqual({ username: 'test' });
    });

    it('Test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('test'),
                // eslint-disable-next-line
            ),
        ).toStrictEqual({ password: 'test' });
    });
});
