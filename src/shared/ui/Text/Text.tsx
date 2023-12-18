import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

const Text = memo((props: TextProps) => {
  const { className = '', title = '', text = '', theme = TextTheme.PRIMARY, size = TextSize.M, align = TextAlign.LEFT } = props

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true
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
