import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from '@/entities/Article'
import { memo } from 'react'
import ListIcon from '@/shared/assets/icons/list.svg?react'
import BlockIcon from '@/shared/assets/icons/tiled.svg?react'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: ListIcon
  },
  {
    view: ArticleView.BLOCK,
    icon: BlockIcon
  }
]

const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className = '', view, onViewClick } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypes.map(viewType => (
              <Button
                  key={viewType.view}
                  theme={ButtonTheme.CLEAR}
                  onClick={onClick(viewType.view)}
                >
                  <Icon Svg={viewType.icon} width='20px' height='20px' className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}/>
              </Button>
          ))}

      </div>
  )
})

ArticleViewSelector.displayName = 'ArticleViewSelector'

export { ArticleViewSelector }
