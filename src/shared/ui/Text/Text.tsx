import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

export enum TextTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

const Text = memo((props: TextProps) => {
  const { className = '', title = '', text = '', theme = TextTheme.PRIMARY } = props

  return (
      <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
          <p className={cls.title}>{title}</p>
          <p className={cls.text}>{text}</p>
      </div>
  )
})

Text.displayName = 'Text'

export { Text }
