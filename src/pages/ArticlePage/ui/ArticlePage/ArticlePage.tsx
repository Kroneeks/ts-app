import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlePage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlePageProps {
  className?: string
}

const ArticlePage = memo(({ className = '' }: ArticlePageProps) => {
  const { t } = useTranslation()

  return (
      <div className={classNames(cls.ArticlePage, {}, [className, 'page-wrapper'])}>
          {t('ArticlePage')}
      </div>
  )
})

ArticlePage.displayName = 'ArticlePage'

export default ArticlePage
