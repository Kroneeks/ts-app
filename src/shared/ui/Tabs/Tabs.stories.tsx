import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './Tabs'
import { BrowserRouter } from 'react-router-dom'
import { type ReactNode } from 'react'
import { action } from '@storybook/addon-actions'

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
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
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    value: 'name 1',
    onTabClick: action('onTabClick'),
    tabs: [
      {
        value: 'name 1',
        content: 'IT' as ReactNode
      },
      {
        value: 'name 2',
        content: 'Science' as ReactNode
      },
      {
        value: 'name 3',
        content: 'Nature' as ReactNode
      }
    ]
  }
}
