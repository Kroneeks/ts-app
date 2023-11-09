import type { Meta, StoryObj } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { BrowserRouter } from 'react-router-dom'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency/model/types/currency'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
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
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    data: {
      first: 'Alex',
      lastname: 'Surname',
      age: 22,
      country: Country.Lithuania,
      currency: Currency.EUR,
      city: 'Vilnius',
      username: 'Freesk'
    }
  }
}

export const IsLoading: Story = {
  args: {
    isLoading: true
  }
}

export const WithError: Story = {
  args: {
    error: 'Error'
  }
}
