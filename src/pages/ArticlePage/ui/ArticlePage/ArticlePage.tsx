import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlePage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleList } from 'entities/Article'
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getArticlesPageError, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelector'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import { useSearchParams } from 'react-router-dom'

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
  const [searchParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    void dispatch(initArticlesPage(searchParams))
  })

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
          <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePage, {}, [className])}>
              <ArticlePageFilters />
              <ArticleList view={view} isLoading={isLoading} articles={articles} className={cls.list} />
          </Page>
      </DynamicModuleLoader>
  )
})

ArticlePage.displayName = 'ArticlePage'

export default ArticlePage
