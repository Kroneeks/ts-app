import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  children?: ReactNode
};

const Button = (props: ButtonProps): React.ReactElement => {
  const { className = '', children, theme = ButtonTheme.PRIMARY, ...otherProps } = props

  return (
      <button {...otherProps} type="button" className={classNames(cls.Button, {}, [className, cls[theme]])}>
          {children}
      </button>
  )
}

export { Button }
