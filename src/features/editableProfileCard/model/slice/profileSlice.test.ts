import { type DeepPartial } from '@reduxjs/toolkit';
import { profileActions, profileReducer } from './profileSlice';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { type ProfileSchema } from '../types/editableProfileCardSchema';
import { ValidateProfileError } from '../consts/consts';

const data = {
    username: 'user',
    first: 'first',
    lastname: 'lastname',
    age: 22,
    country: Country.Lithuania,
    currency: Currency.EUR,
    city: 'Vilnius',
};

describe('profileSlice.test', () => {
    it('Test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state, profileActions.setReadonly(true))).toEqual(
            { readonly: true },
        );
    });

    it('Test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };
        expect(profileReducer(state, profileActions.cancelEdit())).toEqual({
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });

    it('Test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(
            profileReducer(
                state,
                profileActions.updateProfile({ username: '1234' }),
            ),
        ).toEqual({ form: { username: '1234' } });
    });

    it('Test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    it('Test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            data,
            form: data,
            readonly: true,
            isLoading: false,
            validateError: undefined,
        });
    });
});
