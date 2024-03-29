import { screen } from '@testing-library/react';
import { EditableProfileCard } from './EditableProfileCard';
import {
    componentRender,
    type componentRenderOptions,
} from '@/shared/lib/tests/componentRender/componentRender';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { type Profile } from '@/entities/Profile';
import { profileReducer } from '../../model/slice/profileSlice';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 46,
    currency: Currency.USD,
    country: Country.Lithuania,
    city: 'Vilnus',
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    it('Mode ReadOnly should change', async () => {
        componentRender(
            <EditableProfileCard id="1" className="custom-sidebar" />,
            options as componentRenderOptions,
        );
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    it('Cancel should restore values', async () => {
        componentRender(
            <EditableProfileCard id="1" className="custom-sidebar" />,
            options as componentRenderOptions,
        );
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.lastname'),
            'user',
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        );
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'admin',
        );
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'admin',
        );
    });

    it('Should show Error', async () => {
        componentRender(
            <EditableProfileCard id="1" className="custom-sidebar" />,
            options as componentRenderOptions,
        );
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });

    it('Without errors should be send PUT request', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(
            <EditableProfileCard id="1" className="custom-sidebar" />,
            options as componentRenderOptions,
        );
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );
        expect(mockPutReq).toHaveBeenCalled();
    });
});
