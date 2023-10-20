import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
  it('Testing render', () => {
    renderWithTranslation(<Sidebar className="custom-sidebar" />)
    const sidebar = screen.getByTestId('sidebar-test')
    expect(sidebar).toBeInTheDocument()
    expect(sidebar).toHaveClass('custom-sidebar')
  })

  it('Testing toggle', () => {
    renderWithTranslation(<Sidebar />)
    const toggleButton = screen.getByTestId('sidebar-button')
    expect(toggleButton).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar-test')).toHaveClass('collapsed')
  })
})
