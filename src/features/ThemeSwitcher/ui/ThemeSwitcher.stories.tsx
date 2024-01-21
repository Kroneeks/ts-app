import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
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
    argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

type Story = StoryObj<typeof meta>;

export const Standart: Story = {
    render: () => <ThemeSwitcher />,
};
export default meta;
