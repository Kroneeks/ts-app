import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleView, type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text } from 'shared/ui/Text/Text'
import { type HTMLAttributeAnchorTarget, memo, useState, useRef, useEffect, type FC } from 'react'
import { Virtuoso, VirtuosoGrid, type VirtuosoGridHandle } from 'react-virtuoso'
import { ArticlePageFilters } from 'pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters'
import { ARTICLE_LIST_ITEM_LOCASTORAGE_IDX } from 'shared/const/localstorage'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
  onLoadNextPart: () => void
}

const ArticleList = (props: ArticleListProps) => {
  const {
    className = '',
    articles,
    isLoading,
    view = ArticleView.BLOCK,
    target = '_blank',
    onLoadNextPart
  } = props
  const { t } = useTranslation('article')
  const [selectedArticleId, setSelectedArticleId] = useState(1)
  const virtuosoGridRef = useRef<VirtuosoGridHandle>(null)

  const getSkeletons = () => {
    return new Array(3)
      .fill(0).map((_, index) => (<ArticleListItemSkeleton key={index} view={ArticleView.LIST} className={cls.card} />))
  }

  useEffect(() => {
    const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCASTORAGE_IDX) ?? 1
    setSelectedArticleId(+paged)
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (view === 'BLOCK') {
      timeoutId = setTimeout(() => {
        if (virtuosoGridRef.current) {
          virtuosoGridRef.current.scrollToIndex(selectedArticleId)
        }
      }, 100)
    }

    return () => { clearTimeout(timeoutId) }
  }, [selectedArticleId, view])

  const renderArticle = (index: number, article: Article) => {
    return (
        <ArticleListItem
            key={article.id}
            className={cls.card}
            index={index}
            article={article}
            view={view}
            target={target}
        />
    )
  }
  const Footer = memo(() => {
    if (isLoading) {
      return (
          <div className={cls.skeleton}>
              {getSkeletons()}
          </div>
      )
    }
  })
  Footer.displayName = 'Footer'

  if (!isLoading && !articles.length) {
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            <Text title={t('Статьи не найдены')} />
        </div>
    )
  }

  const ItemContainerComp: FC<{ height: number, width: number, index: number }> = ({ height, width, index }) => (
      <div className={cls.ItemContainer}>
          <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
      </div>
  )

  return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {view === 'LIST'
            ? (
                <Virtuoso
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                      Footer
                    }}
                    style={{
                      width: '100%'
                    }}
                />
              )
            : (
                <VirtuosoGrid
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    totalCount={articles.length}
                    components={{
                      ScrollSeekPlaceholder: ItemContainerComp
                    }}
                    listClassName={cls.itemsWrapper}
                    scrollSeekConfiguration={{
                      enter: velocity => Math.abs(velocity) > 700,
                      exit: velocity => Math.abs(velocity) < 30
                    }}
                    style={{
                      width: '100%'
                    }}
                />
              )}
      </div>
  )
}

export { ArticleList }
