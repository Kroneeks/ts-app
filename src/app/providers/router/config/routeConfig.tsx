import { UserRole } from "@/entities/User";
import { AboutPage } from "@/pages/AboutPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { ArticlePage } from "@/pages/ArticlePage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { AppRoutes, RoutePath } from "@/shared/const/router";
import { AppRouteProps } from "@/shared/types/router";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlePage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.articleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: RoutePath.articleCreate,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: RoutePath.articleEdit,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutePath.adminPanel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN]
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
    authOnly: true
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notfound,
    element: <NotFoundPage />
  }
}
