import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

export enum TextTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
}

const Text = memo((props: TextProps) => {
  const { className = '', title = '', text = '', theme = TextTheme.PRIMARY, align = TextAlign.LEFT } = props

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true
  }

  return (
      <div className={classNames(cls.Text, mods, [className])}>
          <p className={cls.title}>{title}</p>
          <p className={cls.text}>{text}</p>
      </div>
  )
})

Text.displayName = 'Text'

export { Text }
