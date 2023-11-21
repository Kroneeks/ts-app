import type { Meta, StoryObj } from '@storybook/react'

import AddCommentForm from './AddCommentForm'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  decorators: [
    (Story) => (
        <BrowserRouter>
            <StoreProvider>
                <Story />
            </StoreProvider>
        </BrowserRouter>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: { }
} satisfies Meta<typeof AddCommentForm>

type Story = StoryObj<typeof meta>
export default meta

export const Light: Story = {
  args: {
  }
}
