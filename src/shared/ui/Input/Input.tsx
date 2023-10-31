import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { memo, type InputHTMLAttributes, type FC } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  type?: string
  onChange?: (value: string) => void
}

const Input: FC<InputProps> = memo((props: InputProps) => {
  const { className = '', value = '', type = 'text', onChange, ...otherProps } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
      <div className={classNames(cls.Input, {}, [className])}>
          <input type={type} value={value} onChange={onChangeHandler} />
      </div>
  )
})

Input.displayName = 'Input'

export { Input }
