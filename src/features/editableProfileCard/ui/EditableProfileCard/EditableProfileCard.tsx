import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ProfileCard } from '@/entities/Profile'
import { type Currency } from '@/entities/Currency'
import { type Country } from '@/entities/Country'
import { useSelector } from 'react-redux'
import { Text, TextTheme } from '@/shared/ui/Text'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { ValidateProfileError } from '@/features/editableProfileCard/model/consts/consts'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchProfileData } from '@/features/editableProfileCard/model/services/fetchProfileData/fetchProfileData'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'

interface EditableProfileCardProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  profile: profileReducer
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { id } = props
  const { t } = useTranslation('profilePage')
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchProfileData(id))
    }
  })

  const validateErrorsTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны')
  }

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value ?? '' }))
  }, [dispatch])

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value ?? '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    const numberReg = /^\d+$/
    if (numberReg.test(value ?? '')) {
      dispatch(profileActions.updateProfile({ age: Number(value) ?? 0 }))
    }
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value ?? '' }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value ?? '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value ?? '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={reducers}>
          <EditableProfileCardHeader />
          {validateErrors?.length && validateErrors?.map((err: ValidateProfileError) => (
              <Text
                  theme={TextTheme.ERROR}
                  key={err}
                  text={validateErrorsTranslates[err]}
                  data-testid="EditableProfileCard.Error"
                />
          ))}
          <ProfileCard
              data={formData}
              isLoading={isLoading}
              error={error}
              readonly={readonly}
              onChangeFirstname={onChangeFirstname}
              onChangeLastname={onChangeLastName}
              onChangeAge={onChangeAge}
              onChangeCity={onChangeCity}
              onChangeUsername={onChangeUsername}
              onChangeAvatar={onChangeAvatar}
              onChangeCurrency={onChangeCurrency}
              onChangeCountry={onChangeCountry}
        />
      </DynamicModuleLoader>
  )
})

EditableProfileCard.displayName = 'EditableProfileCard'
