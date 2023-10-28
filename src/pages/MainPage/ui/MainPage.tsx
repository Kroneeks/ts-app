import { Counter } from 'entities/Counter'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = (): React.ReactElement => {
  const { t } = useTranslation('main')

  return (
      <div className="page-wrapper">
          {t('Главная страница')}
          <Counter />
      </div>
  )
}

export default MainPage
