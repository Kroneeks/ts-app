import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import cls from './ArticleDetailsPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className = '' }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentForArticle(text))
  }, [dispatch])

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return (
        <div className={classNames('', {}, [className, 'page-wrapper'])}>
            {t('Пост не найден')}
        </div>
    )
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames('', {}, [className, 'page-wrapper'])}>
              <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{t('Назад к списку')}</Button>
              <ArticleDetails id={id} />
              <Text className={cls.commentsTitle} title={t('Комментарии')} />
              <AddCommentForm onSendComment={onSendComment} />
              <CommentList isLoading={commentsIsLoading} comments={comments} />
          </div>
      </DynamicModuleLoader>
  )
}

export default ArticleDetailsPage
