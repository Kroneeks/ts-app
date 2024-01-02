import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { type ReactNode } from 'react'
import { Overlay } from '../Overlay/Overlay'
import { useModal } from 'shared/lib/hooks/useModal/useModal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

const Modal = (props: ModalProps) => {
  const { className = '', children, isOpen = false, onClose, lazy = true } = props

  const {
    close,
    isClosing,
    isMounted
  } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
      <div className={classNames(cls.Modal, mods, [className])}>
          <Overlay onClick={close} />
          <div className={cls.content}>
              {children}
          </div>
      </div>
  )
}

export { Modal }
