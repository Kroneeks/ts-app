import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className = '' }: NavbarProps): React.ReactElement => {
  const { t } = useTranslation('navbar')

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <div className={classNames(cls.links)}>
              <AppLink theme={AppLinkTheme.PRIMARY} to='/' className={classNames(cls.mainLink)}>
                  {t('Главная')}
              </AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
                  {t('О сайте')}
              </AppLink>
          </div>
      </div>
  )
}

export { Navbar }
