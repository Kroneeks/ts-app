import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlePageFilters.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { ArticleViewSelector, ArticleView, ArticleSortSelector, type ArticleSortField, ArticleTypeTabs } from 'entities/Article'
import { articlesPageActions } from '../../model/slices/articlesPageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getArticlesPageOrder, getArticlesPageSort, getArticlesPageView, getArticlesPageSearch, getArticlesPageType } from '../../model/selectors/articlesPageSelector'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { type SortOrder } from 'shared/types'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { type ArticleType } from 'entities/Article/model/types/article'

interface ArticlePageFiltersProps {
  className?: string
}

const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
  const { className = '' } = props
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const fetchData = useCallback(() => {
    void dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search))
    dispatch(articlesPageActions.setPage(1))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setType(value))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  return (
      <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
          <div className={cls.sortWrapper}>
              <ArticleSortSelector
                  order={order}
                  sort={sort}
                  onChangeOrder={onChangeOrder}
                  onChangeSort={onChangeSort}
              />
              <ArticleViewSelector view={ArticleView.BLOCK} onViewClick={onChangeView} />
          </div>
          <Card className={cls.search}>
              <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск')} />
          </Card>
          <ArticleTypeTabs
              value={type}
              onChangeType={onChangeType}
              className={cls.tabs}
            />
      </div>
  )
})

ArticlePageFilters.displayName = 'ArticlePageFilters'
export { ArticlePageFilters }
