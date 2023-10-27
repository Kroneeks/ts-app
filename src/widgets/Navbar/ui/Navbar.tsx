import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'app/providers/ThemeProvider'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className = '' }: NavbarProps): React.ReactElement => {
  const { t, i18n } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev: boolean) => !prev)
  }, [])

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal} className={classNames(cls.links)}>
              {t('Войти')}
          </Button>
          <Portal>
              <Modal isOpen={isAuthModal} onClose={onToggleModal} className={classNames('modal', {}, [theme])}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis, sit minima nisi distinctio quod vitae, nesciunt enim repellendus consequatur eaque incidunt aut porro quidem minus! Quaerat impedit magnam error corporis, nulla deserunt minus optio, voluptatum amet rerum ipsam ducimus iure corrupti blanditiis distinctio odit id modi quae accusamus? Nostrum?
              </Modal>
          </Portal>
      </div>
  )
}

export { Navbar }
