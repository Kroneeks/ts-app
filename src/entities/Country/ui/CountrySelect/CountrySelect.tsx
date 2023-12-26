import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { Country } from '../../model/types/country'
import { ListBox } from 'shared/ui/ListBox/ListBox'

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
      <ListBox
          className={className}
          value={value}
          defaultValue={t('Укажите страну')}
          label={t('Укажите страну')}
          items={options}
          onChange={onChangeHandler}
          readonly={readonly}
          direction='top'
        />
  )
})

CountrySelect.displayName = 'CountrySelect'

export { CountrySelect }
