import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlePage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article'
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getArticlesPageError, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelector'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'

interface ArticlePageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlePage = memo(({ className = '' }: ArticlePageProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)
  const inited = useSelector(getArticlesPageInited)

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView))
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    void dispatch(initArticlesPage())
  })

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
          <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePage, {}, [className])}>
              <ArticleViewSelector view={view} onViewClick={onChangeView} />
              <ArticleList view={view} isLoading={isLoading} articles={articles} />
          </Page>
      </DynamicModuleLoader>
  )
})

ArticlePage.displayName = 'ArticlePage'

export default ArticlePage
