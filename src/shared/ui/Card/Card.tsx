import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { useTranslation } from 'react-i18next'
import { type ReactNode, memo, type HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

const Card = memo((props: CardProps) => {
  const { className = '', children, ...otherProps } = props
  const { t } = useTranslation()

  return (
      <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
          {children}
      </div>
  )
})

Card.displayName = 'Card'

export { Card }
