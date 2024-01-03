import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'
import { RatingCard } from '@/entities/Rating'

const MainPage = (): React.ReactElement => {
  const { t } = useTranslation('main')

  return (
      <Page>
          {t('Главная страница')}
          <RatingCard title={t('Как вам статья?')} feedbackTitle={t('Оставьте отзыв о статье')} hasFeedback />
      </Page>
  )
}

export default MainPage
