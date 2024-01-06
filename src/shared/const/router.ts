export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_CREATE = 'articleCreate',
  ARTICLE_EDIT = 'articleEdit',
  ARTICLE_DETAILS = 'articleDetails',
  ADMIN_PANEL = 'adminPanel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'notfound'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/new'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteForbidden = () => '/forbidden'
export const getRouteAdmin = () => '/admin'
