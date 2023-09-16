import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('Button', () => {
  test('Test render', () => {
    render(<Button>Text</Button>);
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Text")
  })

  test('Test theme', () => {
    render(<Button theme={ButtonTheme.SECONDARY}>Text</Button>);
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("secondary")
  })
})
