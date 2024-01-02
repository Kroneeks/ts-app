import { useTranslation } from 'react-i18next'
import { Currency } from '../../model/types/currency'
import { memo, useCallback } from 'react'
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox'

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
      <ListBox
          className={className}
          value={value}
          defaultValue={t('Укажите валюту')}
          label={t('Укажите валюту')}
          items={options}
          onChange={onChangeHandler}
          readonly={readonly}
          direction='top right'
        />
  )
})

CurrencySelect.displayName = 'CurrencySelect'

export { CurrencySelect }
