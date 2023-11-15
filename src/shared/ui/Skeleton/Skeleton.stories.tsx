import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './Skeleton'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
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
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    width: '90vw',
    height: 50
  }
}

export const Circle: Story = {
  args: {
    borderR: '50%',
    width: 100,
    height: 100
  }
}
