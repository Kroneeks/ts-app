import type { Meta, StoryObj } from '@storybook/react'

import { ListBox } from './ListBox'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
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
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
  }
}
