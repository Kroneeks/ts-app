import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'
import { Provider } from 'react-redux'
import { type StateSchema, createReduxStore } from '@/app/providers/StoreProvider'

const store = createReduxStore({} as StateSchema)

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
        <Provider store={store}>
            <Story />
        </Provider>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof Navbar>

type Story = StoryObj<typeof meta>

export const Standart: Story = {
  render: () => <Navbar />
}
export default meta
