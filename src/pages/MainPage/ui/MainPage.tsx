import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const MainPage = (): React.ReactElement => {
  const { t } = useTranslation('main')

  return (
      <Page>
          {t('Главная страница')}
      </Page>
  )
}

export default MainPage
