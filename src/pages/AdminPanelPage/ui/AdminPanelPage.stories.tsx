import type { Meta, StoryObj } from '@storybook/react'

import AdminPanelPage from './AdminPanelPage'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
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
} satisfies Meta<typeof AdminPanelPage>

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  render: () => <AdminPanelPage />
}
export default meta
