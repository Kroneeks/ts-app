import { AboutPage } from 'pages/AboutPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticlePage } from 'pages/ArticlePage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_CREATE = 'articleCreate',
  ARTICLE_EDIT = 'articleEdit',
  ARTICLE_DETAILS = 'articleDetails',
  NOT_FOUND = 'notfound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/',
  [AppRoutes.ARTICLE_CREATE]: '/articles/new',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.NOT_FOUND]: '*'
}

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
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notfound,
    element: <NotFoundPage />
  }
}
