import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Sidebar } from './Sidebar';
import { StoreProvider } from '@/app/providers/StoreProvider';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <StoreProvider>
                    <Story />
                </StoreProvider>
            </BrowserRouter>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
} satisfies Meta<typeof Sidebar>;

type Story = StoryObj<typeof meta>;

export const Standart: Story = {
    render: () => <Sidebar />,
};
export default meta;
