import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { getUserInited, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppToolbar } from './lib/useAppToolbar';

export const App = (): React.ReactElement => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const toolbar = useAppToolbar();

    useEffect(() => {
        // if (!inited) {
        dispatch(initAuthData());
        // }
    }, [dispatch]);

    if (!inited) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        id="app"
                        className={classNames('app_redesigned', {}, [theme])}
                    >
                        <AppLoaderLayout />
                    </div>
                }
                off={
                    <div className={classNames('app', {}, [theme])}>
                        <PageLoader />;
                    </div>
                }
            />
        );
    }

    return (
        <div id="app" className={classNames('app_redesigned', {}, [theme])}>
            <Suspense fallback="">
                <MainLayout
                    content={<AppRouter />}
                    header={<Navbar />}
                    sidebar={<Sidebar />}
                    toolbar={toolbar}
                />
            </Suspense>
        </div>
    );
};
