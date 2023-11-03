import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
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
  argTypes: {}
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
  }
}
