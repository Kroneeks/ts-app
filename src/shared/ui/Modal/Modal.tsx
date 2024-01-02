import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { useEffect, type ReactNode, useCallback, useState } from 'react'
import { Overlay } from '../Overlay/Overlay'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const Modal = (props: ModalProps) => {
  const { className = '', children, isOpen = false, onClose, lazy = true } = props

  const mods: Mods = {
    [cls.opened]: isOpen
  }

  const [isMounted, setIsMounted] = useState(false)

  const closeHandler = useCallback(() => {
    if (onClose !== null && onClose !== undefined) {
      onClose()
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', (e: KeyboardEvent) => { onKeyDown(e) })
    }

    return () => {
      window.removeEventListener('keydown', (e: KeyboardEvent) => { onKeyDown(e) })
    }
  }, [isOpen, onKeyDown])

  if (lazy && !isMounted) {
    return null
  }

  return (
      <div className={classNames(cls.Modal, mods, [className])}>
          <Overlay onClick={closeHandler} />
          <div className={cls.content}>
              {children}
          </div>
      </div>
  )
}

export { Modal }
