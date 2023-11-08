import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { Country } from '../../model/types/country'

interface CountrySelectProps {
  className?: string
  value?: Country
  readonly?: boolean
  onChange?: (value: Country) => void
}

const options = [
  { value: Country.Lithuania, content: Country.Lithuania },
  { value: Country.Poland, content: Country.Poland },
  { value: Country.US, content: Country.US }
]

const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation('profilePage')
  const { className = '', value, readonly = true, onChange } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
      <Select
          className={classNames('', {}, [className])}
          label={t('Укажите страну')}
          options={options}
          value={value}
          onChange={onChangeHandler}
          readonly={readonly}
        />
  )
})

CountrySelect.displayName = 'CountrySelect'

export { CountrySelect }
