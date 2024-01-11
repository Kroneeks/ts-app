import cls from './Popover.module.scss'
import { type ReactNode } from 'react'
import { type DropDownDirection } from '@/shared/types/ui'
import { memo } from 'react'
import { Popover as HPopover } from '@headlessui/react'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface PopoverProps {
  className?: string
  trigger: ReactNode
  direction?: DropDownDirection
  children: ReactNode
}

const Popover = memo((props: PopoverProps) => {
  const { className = '', trigger, direction = 'bottom right', children } = props

  const menuClasses = [mapDirectionClass[direction]]

  return (
      <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
          <HPopover.Button as='div' className={popupCls.trigger}>
              {trigger}
          </HPopover.Button>

          <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
              {children}
          </HPopover.Panel>
      </HPopover>
  )
})

Popover.displayName = 'Popover'

export { Popover }
