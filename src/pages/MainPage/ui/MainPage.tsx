import { Counter } from 'entities/Counter'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Page } from 'widgets/Page/Page'

const MainPage = (): React.ReactElement => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')

  const onChange = (val: string) => {
    setValue(val)
  }

  return (
      <Page>
          {t('Главная страница')}
          <Counter />
          <Input value={value} onChange={onChange} />
      </Page>
  )
}

export default MainPage
