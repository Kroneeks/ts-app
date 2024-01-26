import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'shared/Input',
    component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        value: 'Some text...',
    },
};
