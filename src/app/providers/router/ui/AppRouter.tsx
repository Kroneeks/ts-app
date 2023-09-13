import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = (): React.ReactElement => {
  return (
      <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
              {Object.values(routeConfig).map(({ path, element }) => (
                  <Route
                      key={path}
                      path={path}
                      element={element}
                    />
              ))}
          </Routes>
      </Suspense>
  )
}

export { AppRouter }
