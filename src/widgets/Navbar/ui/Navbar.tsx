import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { UserRole, getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'

interface NavbarProps {
  className?: string
}

const Navbar = memo(({ className = '' }: NavbarProps): React.ReactElement => {
  const { t } = useTranslation('navbar')
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (authData) {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text className={cls.appName} title={t('News App')} theme={TextTheme.INVERTED} />
            <AppLink to={RoutePath.articleCreate} theme={AppLinkTheme.SECONDARY} className={cls.createBtn}>
                {t('Создать статью')}
            </AppLink>
            <Dropdown
                className={cls.dropdown}
                direction='bottom left'
                items={[
                  ...(isAdminPanelAvailable
                    ? [{
                        content: t('Админка'),
                        href: RoutePath.adminPanel
                      }]
                    : []),
                  {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id
                  },
                  {
                    content: t('Выйти'),
                    onClick: onLogout
                  }
                ]}
                trigger={<Avatar size={AvatarSize.SMALL} src={authData.avatar ?? ''} />}
              />
        </header>
    )
  }

  return (
      <header className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal} className={classNames(cls.links)}>
              {t('Войти')}
          </Button>
          <Portal>
              { isAuthModal &&
              <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            }
          </Portal>
      </header>
  )
})

Navbar.displayName = 'Navbar'

export { Navbar }
