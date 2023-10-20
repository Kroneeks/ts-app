import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './Loader'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'shared/Loader',
  component: Loader,
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
} satisfies Meta<typeof Loader>

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  render: () => <Loader />
}
export default meta
