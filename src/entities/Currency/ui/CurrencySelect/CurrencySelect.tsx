import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from '../../model/types/currency'
import { memo, useCallback } from 'react'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  readonly?: boolean
  onChange?: (value: Currency) => void
}

const options = [
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.GBP, content: Currency.GBP }
]

const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { t } = useTranslation('profilePage')
  const { className = '', value, readonly = true, onChange } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
      <Select
          className={classNames('', {}, [className])}
          label={t('Укажите валюту')}
          options={options}
          value={value}
          onChange={onChangeHandler}
          readonly={readonly}
        />
  )
})

CurrencySelect.displayName = 'CurrencySelect'

export { CurrencySelect }
