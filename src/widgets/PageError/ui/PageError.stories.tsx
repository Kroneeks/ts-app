import type { Meta, StoryObj } from '@storybook/react'

import { PageError } from './PageError'

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof PageError>

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  render: () => <PageError />
}

export default meta
