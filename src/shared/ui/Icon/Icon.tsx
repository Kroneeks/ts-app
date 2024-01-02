import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import { memo } from 'react'

export enum IconSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

export enum IconTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted'
}

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  size?: IconSize
  theme?: IconTheme
}

const Icon = memo((props: IconProps) => {
  const { className = '', Svg, size = IconSize.S, theme = IconTheme.PRIMARY } = props

  const mods: Mods = {
    [cls[size]]: true,
    [cls[theme]]: true
  }

  return (
      <Svg className={classNames(cls.Icon, mods, [className])} />
  )
})

Icon.displayName = 'Icon'

export { Icon }
