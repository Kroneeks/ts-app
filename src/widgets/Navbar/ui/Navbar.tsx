import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'app/providers/ThemeProvider'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className = '' }: NavbarProps): React.ReactElement => {
  const { t, i18n } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal} className={classNames(cls.links)}>
              {t('Войти')}
          </Button>
          <Portal>
              <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
          </Portal>
      </div>
  )
}

export { Navbar }
