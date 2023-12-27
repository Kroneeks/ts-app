import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { AddCommentForm } from 'features/AddCommentForm'
import { CommentList } from 'entities/Comment'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticleDetailsCommentsProps {
  className?: string
  id: string
}

const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className = '', id } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const comments = useSelector(getArticleComments.selectAll)

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
  })

  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentForArticle(text))
  }, [dispatch])

  return (
      <>
          <Text size={TextSize.L} title={t('Комментарии')} />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
      </>
  )
})

ArticleDetailsComments.displayName = 'ArticleDetailsComments'

export { ArticleDetailsComments }
