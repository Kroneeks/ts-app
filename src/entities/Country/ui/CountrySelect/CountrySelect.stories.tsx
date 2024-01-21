import type { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        readonly: false,
    },
};

export const Readonly: Story = {
    args: {},
};
