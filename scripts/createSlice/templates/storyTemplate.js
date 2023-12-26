module.exports = (layer, componentName) => `import type { Meta, StoryObj } from '@storybook/react'

import { ${componentName} } from './${componentName}'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: '${layer}/${componentName}',
  component: ${componentName},
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
} satisfies Meta<typeof ${componentName}>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
  }
}`;
