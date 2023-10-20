import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
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
} satisfies Meta<typeof Navbar>

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  render: () => <Navbar />
}
export default meta
