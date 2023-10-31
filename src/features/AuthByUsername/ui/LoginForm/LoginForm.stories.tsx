import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  decorators: [
    (Story) => (
        <BrowserRouter>
            <Story />
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
