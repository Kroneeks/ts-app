import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { Select, type SelectOption } from 'shared/ui/Select/Select'
import { ArticleSortField } from 'entities/Article/model/types/article'
import { type SortOrder } from 'shared/types'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className = '', sort, order, onChangeOrder, onChangeSort } = props
  const { t } = useTranslation()

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField)
  }, [onChangeSort])

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder)
  }, [onChangeOrder])

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('возрастанию')
    },
    {
      value: 'desc',
      content: t('убыванию')
    }
  ], [t])

  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам')
    }
  ], [t])

  return (
      <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <Select
              options={sortFieldOptions}
              label={t('Сортировать ПО')}
              readonly={false}
              value={sort}
              onChange={onChangeSort}
            />
          <Select
              options={orderOptions}
              label={t('по')}
              readonly={false}
              value={order}
              onChange={onChangeOrder}
            />
      </div>
  )
})

ArticleSortSelector.displayName = 'ArticleSortSelector'

export { ArticleSortSelector }
