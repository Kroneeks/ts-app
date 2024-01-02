import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

export enum AvatarSize {
  SMALL = 'small',
  NORMAL = 'normal',
  LARGE = 'large'
}

interface AvatarProps {
  className?: string
  src: string
  alt?: string
  size?: AvatarSize
}

const Avatar = (props: AvatarProps) => {
  const { className = '', src, alt = 'Sign a picture', size = AvatarSize.NORMAL } = props

  const mods: Mods = {
    [cls[size]]: true
  }

  return (
      <div className={classNames(cls.Avatar, mods, [className])}>
          <img src={src} alt={alt} />
      </div>
  )
}

export { Avatar }
