import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';
import { BrowserRouter } from 'react-router-dom';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
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
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomRight: Story = {
    args: {
        defaultValue: 'Выберите значение',
        items: [
            { content: 'Content 1', value: '123' },
            { content: 'Content 2', value: '234' },
            { content: 'Content 3', value: '345' },
        ],
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        defaultValue: 'Выберите значение',
        items: [
            { content: 'Content 1', value: '123' },
            { content: 'Content 2', value: '234' },
            { content: 'Content 3', value: '345' },
        ],
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        defaultValue: 'Выберите значение',
        items: [
            { content: 'Content 1', value: '123' },
            { content: 'Content 2', value: '234' },
            { content: 'Content 3', value: '345' },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        defaultValue: 'Выберите значение',
        items: [
            { content: 'Content 1', value: '123' },
            { content: 'Content 2', value: '234' },
            { content: 'Content 3', value: '345' },
        ],
    },
};
