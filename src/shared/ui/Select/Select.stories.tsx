import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'shared/Select',
  component: Select,
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
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    label: 'Заголовок',
    options: [
      { value: '1', content: 'Первый пункт' },
      { value: '2', content: 'Второй пункт' },
      { value: '3', content: 'Третий пункт' }
    ],
    readonly: false
  }
}
