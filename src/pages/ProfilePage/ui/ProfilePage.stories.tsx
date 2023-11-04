import type { Meta, StoryObj } from '@storybook/react'

import ProfilePage from './ProfilePage'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
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
  argTypes: {}
} satisfies Meta<typeof ProfilePage>

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  render: () => <ProfilePage />
}
export default meta
