import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTheme } from 'app/providers/ThemeProvider'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const LoginModal = ({ className = '', isOpen, onClose }: LoginModalProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
      <Modal className={classNames(`${cls.LoginModal} modal`, {}, [className, theme])} isOpen={isOpen} onClose={onClose}>
          <LoginForm />
      </Modal>
  )
}

export { LoginModal }
