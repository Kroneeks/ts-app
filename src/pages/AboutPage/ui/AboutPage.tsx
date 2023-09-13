import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = (): React.ReactElement => {
  const { t } = useTranslation('about')

  return (
      <div className="page-wrapper">
          {t('О сайте')}
      </div>
  )
}

export default AboutPage
