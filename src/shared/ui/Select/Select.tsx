import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { useTranslation } from 'react-i18next'
import { type ChangeEvent, memo, useCallback, useMemo } from 'react'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
}

const Select = memo((props: SelectProps) => {
  const { t } = useTranslation()
  const { className = '', label = '', value, options, readonly = true, onChange } = props

  const optionsList = useMemo(() => {
    return options?.map((opt) => <option key={opt.value} className={cls.option} value={opt.value}>{opt.content}</option>)
  }, [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange?.(e.target.value)
    }
  }

  return (
      <div className={classNames(cls.Wrapper, {}, [className])}>
          {label && <span className={cls.label}>{label}</span> }
          <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
              {optionsList}
          </select>
      </div>
  )
})

Select.displayName = 'Select'

export { Select }
