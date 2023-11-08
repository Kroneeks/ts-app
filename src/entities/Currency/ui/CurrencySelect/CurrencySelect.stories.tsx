import type { Meta, StoryObj } from '@storybook/react'

import { CurrencySelect } from './CurrencySelect'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
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
} satisfies Meta<typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
  }
}
