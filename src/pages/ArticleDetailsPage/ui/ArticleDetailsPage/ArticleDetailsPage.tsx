import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = memo(({ className = '' }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
        <div className={classNames('', {}, [className, 'page-wrapper'])}>
            {t('Пост не найден')}
        </div>
    )
  }

  return (
      <div className={classNames('', {}, [className, 'page-wrapper'])}>
          <ArticleDetails id={id} />
      </div>
  )
})

ArticleDetailsPage.displayName = 'ArticleDetailsPage'

export default ArticleDetailsPage
