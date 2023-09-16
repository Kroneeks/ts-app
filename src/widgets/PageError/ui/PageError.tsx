import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

const PageError = ({ className = '' }: PageErrorProps) => {
  const { t } = useTranslation('pageError')

  const reloadPage = () => {
    location.reload()
  }

  return (
      <div className={classNames(cls.PageError, {}, [className])}>
          <p>{t('Произошла непредвиденная ошибка')}</p>
          <Button theme={ButtonTheme.PRIMARY} onClick={reloadPage}>{t('Обновить страницу')}</Button>
      </div>
  )
}

export { PageError }
