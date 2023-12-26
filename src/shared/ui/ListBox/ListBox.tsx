import { Fragment, type ReactNode, useState } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from '../Button/Button'
import { HStack } from '../Stack'
import { type DropDownDirection } from 'shared/types/ui'

export interface ListBoxItem {
  id?: number
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  readonly?: boolean
  direction?: DropDownDirection
  label?: string
}

const mapDirectionClass: Record<DropDownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight
}

export const ListBox = (props: ListBoxProps) => {
  const { className = '', items, value, defaultValue, onChange, readonly, direction = 'bottom right', label } = props
  const [selectedPerson, setSelectedPerson] = useState()

  const optionsClasses = [mapDirectionClass[direction]]

  return (
      <HStack gap='4'>
          {label && <span>{label}</span>}
          <HListBox
              disabled={readonly}
              as={'div'}
              className={classNames(cls.ListBox, {}, [className])}
              value={selectedPerson}
              onChange={onChange}
        >
              <HListBox.Button className={cls.trigger}>
                  <Button disabled={readonly}>
                      {value ?? defaultValue}
                  </Button>
              </HListBox.Button>
              <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                  {items?.map((item) => (
                      <HListBox.Option
                          key={item.id}
                          value={item.value}
                          disabled={item.disabled}
                          as={Fragment}
                    >
                          {({ active, selected }) => (
                              <li className={classNames(
                                cls.item, {
                                  [cls.active]: active,
                                  [cls.disabled]: item.disabled
                                }) }>
                                  {selected && '>'}
                                  {item.content}
                              </li>
                          )}
                      </HListBox.Option>
                  ))}
              </HListBox.Options>
          </HListBox>
      </HStack>
  )
}
