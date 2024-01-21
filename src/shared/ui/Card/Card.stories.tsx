import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { BrowserRouter } from 'react-router-dom';
import { Text } from '../Text/Text';

const meta = {
    title: 'shared/Card',
    component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: <Text title={'test'} text={'text'} />,
    },
};
