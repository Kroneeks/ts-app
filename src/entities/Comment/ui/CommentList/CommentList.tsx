import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'

interface CommentListProps {
  className?: string
  comments: Comment[]
  isLoading?: boolean
}

const CommentList = (props: CommentListProps) => {
  const { className = '', comments = [], isLoading = false } = props
  const { t } = useTranslation('comments')

  if (isLoading) {
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            <CommentCard isLoading />
            <CommentCard isLoading />
            <CommentCard isLoading />
        </div>
    )
  }

  return (
      <div className={classNames(cls.CommentList, {}, [className])}>
          {comments?.length
            ? comments.map((comment) => (
                <CommentCard
                    isLoading={isLoading}
                    className={cls.comment}
                    comment={comment}
                    key={comment.id}
                />
            ))
            : <Text title={t('Комментарии отсутствуют')} />
          }
      </div>
  )
}

export { CommentList }
