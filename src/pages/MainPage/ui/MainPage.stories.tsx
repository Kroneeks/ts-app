import type { Meta, StoryObj } from '@storybook/react'

import MainPage from './MainPage'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
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
} satisfies Meta<typeof MainPage>

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  render: () => <MainPage />
}
export default meta
