import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleView, type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

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
  const { t } = useTranslation()

  if (isLoading) {
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {getSkeletons(view)}
        </div>
    )
  }

  const renderArticle = (article: Article) => (
      <ArticleListItem article={article} view={view} />
  )

  return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {articles.length > 0
            ? articles.map(renderArticle)
            : null}

      </div>
  )
}

export { ArticleList }
