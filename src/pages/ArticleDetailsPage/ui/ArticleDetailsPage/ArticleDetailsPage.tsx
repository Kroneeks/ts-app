import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { Text, TextSize } from 'shared/ui/Text/Text'
import cls from './ArticleDetailsPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { articleDetailsPageRecomendationReducer, getArticleRecomendations } from '../../model/slices/articleDetailsPageRecomendationSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'
import { getArticleRecomendationsIsLoading } from '../../model/selectors/recomendations'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({ className = '' }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const recomendations = useSelector(getArticleRecomendations.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recomendationsIsLoading = useSelector(getArticleRecomendationsIsLoading)
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
    void dispatch(fetchArticleRecommendations())
  })

  if (!id) {
    return (
        <Page className={classNames('', {}, [className])}>
            {t('Пост не найден')}
        </Page>
    )
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <Page className={classNames('', {}, [className])}>
              <ArticleDetailsPageHeader />
              <ArticleDetails id={id} />
              <Text size={TextSize.L} className={cls.commentsTitle} title={t('Рекомендуем')} />
              <ArticleList articles={recomendations} isLoading={recomendationsIsLoading} className={cls.recommendations} target={'_blank'} />
              <Text size={TextSize.L} className={cls.commentsTitle} title={t('Комментарии')} />
              <AddCommentForm onSendComment={onSendComment} />
              <CommentList isLoading={commentsIsLoading} comments={comments} />
          </Page>
      </DynamicModuleLoader>
  )
}

export default ArticleDetailsPage
