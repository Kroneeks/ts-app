import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { useEffect, type ReactNode, useCallback } from 'react'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const Modal = (props: ModalProps) => {
  const { className = '', children, isOpen = false, onClose } = props

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen
  }

  const closeHandler = useCallback(() => {
    if (onClose !== null && onClose !== undefined) {
      onClose()
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', (e: KeyboardEvent) => { onKeyDown(e) })
    }

    return () => {
      window.removeEventListener('keydown', (e: KeyboardEvent) => { onKeyDown(e) })
    }
  }, [isOpen, onKeyDown])

  return (
      <div className={classNames(cls.Modal, mods, [className])}>
          <div className={cls.overlay} onClick={closeHandler}>
              <div className={cls.content} onClick={onContentClick}>
                  {children}
              </div>
          </div>
      </div>
  )
}

export { Modal }
