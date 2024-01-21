import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { type Comment } from '@/entities/Comment/model/types/comment';
import { type User } from '@/entities/User/model/types/user';

const meta = {
    title: 'entities/CommentList',
    component: CommentList,
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
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CommentList>;

type Story = StoryObj<typeof meta>;
export default meta;

const users: User[] = [
    {
        id: '1',
        username: 'first',
    },
    {
        id: '2',
        username: 'second',
    },
    {
        id: '1',
        username: 'third',
    },
];

const storyComments: Comment[] = [
    {
        id: '1',
        user: users[0],
        text: '1123',
    },
    {
        id: '2',
        user: users[1],
        text: 'Some text',
    },
];

export const Light: Story = {
    args: {
        comments: storyComments,
    },
};

export const Loading: Story = {
    args: {
        comments: storyComments,
        isLoading: true,
    },
};
