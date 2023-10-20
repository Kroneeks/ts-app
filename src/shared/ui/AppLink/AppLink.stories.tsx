import type { Meta, StoryObj } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'widgets/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    )
  ],
  args: {
    to: ''
  },
  argTypes: {}
} satisfies Meta<typeof AppLink>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY
  }
}

export default meta
