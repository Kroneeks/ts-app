import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { useTranslation } from 'react-i18next'
import { type Article, type ArticleTextBlock } from '../../model/types/article'
import { ArticleView, ArticleBlockType } from '@/entities/Article/model/consts/consts'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg?react'
import { Card } from '@/shared/ui/Card'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { getRouteArticleDetails } from '@/shared/const/router'
import { AppLink } from '@/shared/ui/AppLink'
import { ARTICLE_LIST_ITEM_LOCASTORAGE_IDX } from '@/shared/const/localstorage'
import { AppImage } from '@/shared/ui/AppImage/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
  index?: number
}

const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className = '', article, view, target = '_blank', index } = props
  const { t } = useTranslation('article')

  const types = <Text text={article.type.join(', ')} className={cls.types} />
  const views = (
      <>
          <Text text={String(article.views)} className={cls.views} />
          <Icon Svg={EyeIcon} width='20px' height='20px' />
      </>
  )

  const handleButtonClick = () => {
    if (index) {
      sessionStorage.setItem(ARTICLE_LIST_ITEM_LOCASTORAGE_IDX, JSON.stringify(index))
    }
  }

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            data-testid='ArticleListItem'
            >
            <Card className={cls.card}>
                <div className={cls.header}>
                    <Avatar src={article.user?.avatar ?? ''} />
                    <Text text={article.user.username} className={cls.username} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <Text title={article.title} className={cls.title} />
                {types}
                <AppImage
                    fallback={<Skeleton width='100%' height='250px' />}
                    src={article.img}
                    className={cls.img}
                    alt={article.title}
                />
                {textBlock && (
                    <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                )}
                <div className={cls.footer}>
                    <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                        <Button theme={ButtonTheme.OUTLINE} onClick={handleButtonClick}>{t('Читать далее')}</Button>
                    </AppLink>
                    {views}
                </div>
            </Card>
        </div>
    )
  }

  return (
      <AppLink
          to={getRouteArticleDetails(article.id)}
          className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
          target={target}
          onClick={handleButtonClick}
          data-testid='ArticleListItem'
        >
          <Card>
              <div className={cls.imageWrapper}>
                  <AppImage
                      fallback={<Skeleton width='200px' height='250px;' />}
                      src={article.img}
                      alt={article.title}
                      className={cls.img}
                    />
                  <Text text={article.createdAt} className={cls.date} />
              </div>
              <div className={cls.infoWrapper}>
                  {types}
                  {views}
              </div>
              <Text text={article.title} className={cls.title} />
          </Card>
      </AppLink>
  )
})

ArticleListItem.displayName = 'ArticleListItem'

export { ArticleListItem }
