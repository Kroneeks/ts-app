import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleView, type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text } from 'shared/ui/Text/Text'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.BLOCK ? 9 : 3)
    .fill(0).map((item, index) => (<ArticleListItemSkeleton key={index} view={view} />))
}

const ArticleList = (props: ArticleListProps) => {
  const { className = '', articles, isLoading, view = ArticleView.BLOCK } = props
  const { t } = useTranslation('article')

  const renderArticle = (article: Article) => (
      <ArticleListItem key={article.id} article={article} view={view} />
  )

  if (!isLoading && !articles.length) {
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            <Text title={t('Статьи не найдены')} />
        </div>
    )
  }

  return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {articles.length > 0
            ? articles.map(renderArticle)
            : null}

          {isLoading && getSkeletons(view)}
      </div>
  )
}

export { ArticleList }
