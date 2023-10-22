import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import ToggleIcon from 'shared/assets/icons/toggle-sidebar.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className = '' }: SidebarProps): React.ReactElement => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  const { t } = useTranslation('navbar')

  return (
      <div data-testid="sidebar-test" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button data-testid="sidebar-button" className={cls.collapseBtn} theme={ButtonTheme.CLEAR} size={ButtonSize.XL} onClick={onToggle} square><ToggleIcon className={classNames(cls.ToggleIcon)} fill="white" /></Button>
          <div className={cls.items}>
              <div>
                  <AppLink
                      theme={AppLinkTheme.SECONDARY}
                      to={RoutePath.main}
                      className={cls.item}
                  >
                      <MainIcon className={cls.icon} />
                      <span className={classNames(cls.link)}>{t('Главная')}</span>
                  </AppLink>
              </div>
              <div>
                  <AppLink
                      theme={AppLinkTheme.SECONDARY}
                      to={RoutePath.about}
                      className={cls.item}
                  >
                      <AboutIcon className={cls.icon} />
                      <span className={classNames(cls.link)}>{t('О сайте')}</span>
                  </AppLink>
              </div>
          </div>
          <div className={classNames(cls.switchers)}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
      </div>
  )
}

export { Sidebar }
