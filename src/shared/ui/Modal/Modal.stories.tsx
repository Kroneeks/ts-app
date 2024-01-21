import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'shared/Modal',
    component: Modal,
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
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Light: Story = {
    args: {
        isOpen: true,
        className: 'modal light',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis, sit minima nisi distinctio quod vitae, nesciunt enim repellendus consequatur eaque incidunt aut porro quidem minus! Quaerat impedit magnam error corporis, nulla deserunt minus optio, voluptatum amet rerum ipsam ducimus iure corrupti blanditiis distinctio odit id modi quae accusamus? Nostrum?',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        className: 'modal dark',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis, sit minima nisi distinctio quod vitae, nesciunt enim repellendus consequatur eaque incidunt aut porro quidem minus! Quaerat impedit magnam error corporis, nulla deserunt minus optio, voluptatum amet rerum ipsam ducimus iure corrupti blanditiis distinctio odit id modi quae accusamus? Nostrum?',
    },
};
