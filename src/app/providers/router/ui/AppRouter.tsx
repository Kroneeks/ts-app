import { getUserAuthData } from 'entities/User'
import { Suspense, memo, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { type AppRoutes, routeConfig, type AppRouteProps } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter = memo((): React.ReactElement => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (<div>{route.element}</div>)

    return (
        <Route
            key={route.path}
            path={route.path}
            element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
   />
    )
  }, [])

  // {routes.map(({ path, element }) => (
  // <Route
  // key={path}
  // path={path}
  // element={element}
  // />
  // ))}

  return (
      <Suspense fallback={<PageLoader />}>
          <Routes>
              {Object.values(routeConfig).map(renderWithWrapper)}
          </Routes>
      </Suspense>
  )
})

AppRouter.displayName = 'AppRouter'

export { AppRouter }
