import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

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
          <div className={classNames(cls.AddCommentForm, {}, [className])}>
              <Input className={cls.input} value={text} onChange={onCommentTextChange} placeholder={t('Введите текст комментария')} />
              <Button onClick={onSendHandler}>{t('Отправить')}</Button>
          </div>
      </DynamicModuleLoader>
  )
}

export default AddCommentForm
