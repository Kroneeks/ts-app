import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/widgets/Page/Page'
import { useParams } from 'react-router-dom'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className = '' } = props
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
      <Page className={classNames('', {}, [className])}>
          {isEdit ? 'Редактирование статьи с id = ' + id : 'Создание новой статьи'}
      </Page>
  )
})

ArticleEditPage.displayName = 'ArticleEditPage'

export default ArticleEditPage
