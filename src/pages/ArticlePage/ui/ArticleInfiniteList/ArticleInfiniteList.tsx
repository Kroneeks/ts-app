import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getArticles } from '../../model/slices/articlesPageSlice'
import { getArticlesPageError, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelector'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ArticleList } from 'entities/Article'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface ArticleInfiniteListProps {
  className?: string
}

const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className = '' } = props
  const { t } = useTranslation('article')
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)
  const inited = useSelector(getArticlesPageInited)
  const dispatch = useAppDispatch()

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  if (error) {
    return (
        <Text theme={TextTheme.ERROR} text={t('Произошла ошибка во время загрузки данных')} />
    )
  }

  return (
      <ArticleList
          view={view}
          isLoading={isLoading}
          articles={articles}
          className={className}
          onLoadNextPart={onLoadNextPart}
        />
  )
})

ArticleInfiniteList.displayName = 'ArticleInfiniteList'

export { ArticleInfiniteList }
