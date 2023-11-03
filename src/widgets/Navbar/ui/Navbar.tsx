import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className = '' }: NavbarProps): React.ReactElement => {
  const { t } = useTranslation('navbar')
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout} className={classNames(cls.links)}>
                {t('Выйти')}
            </Button>
        </div>
    )
  }

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal} className={classNames(cls.links)}>
              {t('Войти')}
          </Button>
          <Portal>
              { isAuthModal &&
              <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            }
          </Portal>
      </div>
  )
}

export { Navbar }
