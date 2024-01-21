import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from '@/shared/ui/Stack'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className = '', onSendComment } = props
  const { t } = useTranslation()
  const text = useSelector(getAddCommentFormText)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    void dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text ?? '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
      <DynamicModuleLoader reducers={reducers}>
          <HStack
              max
              justify='between'
              className={classNames(cls.AddCommentForm, {}, [className])}
              data-testid='AddCommentForm'
            >
              <Input
                  className={cls.input}
                  value={text}
                  onChange={onCommentTextChange}
                  placeholder={t('Введите текст комментария')}
                  data-testid='AddCommentForm.Input'
                />
              <Button
                  onClick={onSendHandler}
                  data-testid='AddCommentForm.Button'
                >{t('Отправить')}</Button>
          </HStack>
      </DynamicModuleLoader>
  )
}

export default AddCommentForm
