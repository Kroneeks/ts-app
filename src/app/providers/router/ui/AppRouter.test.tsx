import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { AppRouter } from './AppRouter'
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router'
import { screen } from '@testing-library/react'
import { UserRole } from '@/entities/User'

describe('AppRouter.test', () => {
  it('Page must be render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout()
    })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  it('Page not found', async () => {
    componentRender(<AppRouter />, {
      route: '/sdfsdfsdf'
    })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  it('Redirect for unauthorized user', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1')
    })

    const page = await screen.findByTestId('PageLoader')
    expect(page).toBeInTheDocument()
  })

  it('Allow required auth page for autorized user', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _inited: true, authData: { id: '1', username: 'username' } }
      }
    })

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  it('Forrbide page for non-correct user role', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: { id: '1', username: 'username', roles: [UserRole.USER] } }
      }
    })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  it('Allow page for correct user role', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: { id: '1', username: 'username', roles: [UserRole.MANAGER] } }
      }
    })

    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})
