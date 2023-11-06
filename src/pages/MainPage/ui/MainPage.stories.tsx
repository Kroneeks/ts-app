import type { Meta, StoryObj } from '@storybook/react'

import MainPage from './MainPage'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
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
} satisfies Meta<typeof MainPage>

type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
  }
}
export default meta
