import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTheme } from 'app/providers/ThemeProvider'
import { Suspense } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from 'shared/ui/Loader/Loader'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const LoginModal = ({ className = '', isOpen, onClose }: LoginModalProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
      <Modal className={classNames('modal', {}, [className, theme])} isOpen={isOpen} onClose={onClose}>
          <Suspense fallback={<Loader />}>
              <LoginFormAsync onSuccess={onClose} />
          </Suspense>
      </Modal>
  )
}

export { LoginModal }
