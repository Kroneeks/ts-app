import { Counter } from 'entities/Counter'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = (): React.ReactElement => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')

  const onChange = (val: string) => {
    setValue(val)
  }

  return (
      <div className="page-wrapper" style={{ color: 'blue' }}>
          {t('Главная страница')}
          <Counter />
          <Input value={value} onChange={onChange} />
      </div>
  )
}

export default MainPage
