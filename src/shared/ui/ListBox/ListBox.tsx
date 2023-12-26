import { Fragment, type ReactNode, useState } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import { Button } from '../Button/Button'
import { HStack } from '../Stack'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false }
]

export interface ListBoxItem {
  id?: number
  value: string
  content: ReactNode
  disabled?: boolean
}

type DropDownDirection = 'top' | 'bottom'

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
  bottom: cls.optionsBottom,
  top: cls.optionsTop
}

export const ListBox = (props: ListBoxProps) => {
  const { className = '', items, value, defaultValue, onChange, readonly, direction = 'bottom', label } = props
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
