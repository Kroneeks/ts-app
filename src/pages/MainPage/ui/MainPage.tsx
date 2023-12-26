import { Counter } from 'entities/Counter'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { ListBox, type ListBoxItem } from 'shared/ui/ListBox/ListBox'
import { HStack } from 'shared/ui/Stack'
import { Page } from 'widgets/Page/Page'

const MainPage = (): React.ReactElement => {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')

  const onChange = (val: string) => {
    setValue(val)
  }

  const onChangeSelect = () => {
    console.log('Выбран новый пункт')
  }

  const selectItems: ListBoxItem[] = [
    { value: '1', content: 'Текст 1' },
    { value: '2', content: 'Текст 2' },
    { value: '3', content: 'Текст 3', disabled: true },
    { value: '4', content: 'Текст 4' },
    { value: '5', content: 'Текст 5' }
  ]

  return (
      <Page>
          {t('Главная страница')}
          <div>Text</div>
          <div>Text</div>
          <HStack>
              <div>Text</div>
              <ListBox items={selectItems} value={undefined} defaultValue={'Выберите значение'} onChange={onChangeSelect} />
          </HStack>
          <div>Text</div>
          <div>Text</div>
          <div>Text</div>
      </Page>
  )
}

export default MainPage
