import type { Meta, StoryObj } from '@storybook/react'

import ProfilePage from './ProfilePage'
import { BrowserRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

// const initialState: StateSchema = {
// profile: {
// form: {
// username: 'Sasha',
// first: 'Sasha',
// lastname: 'Surname',
// country: Country.Lithuania,
// currency: Currency.EUR,
// city: 'Vilnius',
// age: 22
// },
// isLoading: false,
// readonly: false,
// error: undefined
// },
// counter: { value: 1 },
// user: { _inited: false },
// ui: {
// scroll: { articles: 0 }
// }
// }

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
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
} satisfies Meta<typeof ProfilePage>

type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
  }
}
export default meta
