import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof Sidebar>

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  render: () => <Sidebar />
}
export default meta
