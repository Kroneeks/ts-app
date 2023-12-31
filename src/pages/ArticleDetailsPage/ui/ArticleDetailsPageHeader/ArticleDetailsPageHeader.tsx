import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article'
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className = '' } = props
  const { t } = useTranslation()
  const navigate = useNavigate()
  const userData = useSelector(getUserAuthData)
  const article = useSelector(getArticleDetailsData)
  const canEdit = useSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articleDetails}${article?.id}/edit`)
  }, [navigate, article?.id])

  return (
      <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
          <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onBackToList}
            >{t('Назад к списку')}</Button>
          {canEdit && (
          <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onEditArticle}
              >{t('Редактировать')}</Button>
          )}
      </div>
  )
})

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader'

export { ArticleDetailsPageHeader }
