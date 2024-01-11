import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { type ReactNode, memo, type HTMLAttributes } from 'react'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: CardTheme
  max?: boolean
}

const Card = memo((props: CardProps) => {
  const {
    className = '',
    children,
    theme = CardTheme.NORMAL,
    max = false,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.max]: max
  }

  return (
      <div className={classNames(cls.Card, mods, [className, cls[theme]])} {...otherProps}>
          {children}
      </div>
  )
})

Card.displayName = 'Card'

export { Card }
