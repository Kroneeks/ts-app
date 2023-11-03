import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
};

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  children?: ReactNode
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
};

const Button = (props: ButtonProps): React.ReactElement => {
  const { className = '', children, theme = ButtonTheme.PRIMARY, size = ButtonSize.M, square = false, disabled = false, ...otherProps } = props

  const mods: Record<string, boolean | string> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled
  }

  return (
      <button {...otherProps} type="button" disabled={disabled} className={classNames(cls.Button, mods, [className, cls[theme]])}>
          {children}
      </button>
  )
}

export { Button }
