import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { Page } from '@/widgets/Page'

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage = (className: NotFoundPageProps): React.ReactElement => {
  const { t } = useTranslation('notfound')

  return (
      <Page data-testid="NotFoundPage" className={classNames(cls.NotFoundPage)}>
          {t('Страница не найдена')}
      </Page>
  )
}

export { NotFoundPage }
