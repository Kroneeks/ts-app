import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import { memo } from 'react'

export enum IconSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  size?: IconSize
}

const Icon = memo((props: IconProps) => {
  const { className = '', Svg, size = IconSize.S } = props

  const mods: Mods = {
    [cls[size]]: true
  }

  return (
      <Svg className={classNames(cls.Icon, mods, [className])} />
  )
})

Icon.displayName = 'Icon'

export { Icon }
