import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import cls from './ArticleDetails.module.scss'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { ArticleBlockType, type ArticleBlock } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { t } = useTranslation('article-details')
  const { className = '', id } = props
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const article = useSelector(getArticleDetailsData)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />
      default:
        return null
    }
  }, [])

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
        <>
            <Skeleton className={cls.avatar} width={200} height={200} borderR={'50%'} />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width={'100%'} height={200} />
            <Skeleton className={cls.skeleton} width={'100%'} height={200} />
        </>
    )
  } else if (error) {
    content = (
        <Text theme={TextTheme.ERROR} title={t('Произошла ошибка при загрузке статьи')} align={TextAlign.CENTER} text={error} />
    )
  } else {
    content = (
        <>
            <div className={cls.avatarWrapper}>
                <Avatar size={AvatarSize.LARGE} src={article?.img ?? ''} className={cls.avatar} />
            </div>
            <Text title={article?.title} text={article?.subtitle} />
            <div className={cls.articleInfo}>
                <Icon Svg={EyeIcon} />
                <Text size={TextSize.S} text={String(article?.views)} />
            </div>
            <div className={cls.articleInfo}>
                <Icon Svg={CalendarIcon} />
                <Text size={TextSize.S} text={article?.createdAt} />
            </div>
            {article?.blocks.map(renderBlock)}
        </>
    )
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          {content}
      </DynamicModuleLoader>
  )
})

ArticleDetails.displayName = 'ArticleDetails'

export { ArticleDetails }
