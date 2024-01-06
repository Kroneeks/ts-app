import { Modal } from '@/shared/ui/Modal'
import { Suspense } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from '@/shared/ui/Loader'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const LoginModal = ({ className = '', isOpen, onClose }: LoginModalProps) => {
  return (
      <Modal className={className} isOpen={isOpen} onClose={onClose}>
          <Suspense fallback={<Loader />}>
              <LoginFormAsync onSuccess={onClose} />
          </Suspense>
      </Modal>
  )
}

export { LoginModal }
