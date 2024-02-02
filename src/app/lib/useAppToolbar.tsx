import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar/ui/ScrollToolbar/ScrollToolbar';
import { type ReactElement } from 'react';

export function useAppToolbar() {
    const appRoute = useRouteChange();
    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
        [AppRoutes.MAIN]: <div>MAIN</div>,
        [AppRoutes.ABOUT]: <div>ABOUT</div>,
    };

    return toolbarByAppRoute[appRoute];
}
