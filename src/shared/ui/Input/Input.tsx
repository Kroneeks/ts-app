import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { memo, type InputHTMLAttributes, type FC } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  type?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

const Input: FC<InputProps> = memo((props: InputProps) => {
  const { className = '', value = '', type = 'text', onChange, readonly = false, ...otherProps } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readonly
  }

  return (
      <div className={classNames(cls.Input, mods, [className])}>
          <input type={type} value={value} readOnly={readonly} onChange={onChangeHandler} />
      </div>
  )
})

Input.displayName = 'Input'

export { Input }
