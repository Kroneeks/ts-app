import type { Meta, StoryObj } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
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
} satisfies Meta<typeof NotFoundPage>

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  render: () => <NotFoundPage />
}
export default meta
