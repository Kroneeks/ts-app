import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from './RequireAuth';
import { type AppRouteProps } from '@/shared/types/router';

const AppRouter = memo((): React.ReactElement => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = <>{route.element}</>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
});

AppRouter.displayName = 'AppRouter';

export { AppRouter };
