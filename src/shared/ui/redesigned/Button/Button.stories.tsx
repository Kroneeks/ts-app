import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
    },
};

export const OutlineSizeM: Story = {
    args: {
        children: 'Text',
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        size: 'l',
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        size: 'xl',
    },
};

export const Square: Story = {
    args: {
        children: '>',
        square: true,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        square: true,
        size: 'l',
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        square: true,
        size: 'xl',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
    },
};
