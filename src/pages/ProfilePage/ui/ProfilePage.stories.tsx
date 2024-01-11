import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
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
  argTypes: {}
} satisfies Meta<typeof ProfilePage>

type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
  }
}
export default meta
