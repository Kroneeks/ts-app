import type { Meta, StoryObj } from '@storybook/react'

import AboutPage from './AboutPage'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
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
} satisfies Meta<typeof AboutPage>

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  render: () => <AboutPage />
}
export default meta
