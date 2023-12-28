import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { getProfileData } from 'features/editableProfileCard/model/selectors/getProfileData/getProfileData'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getProfileReadonly } from 'features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions } from 'features/editableProfileCard/model/slice/profileSlice'
import { updateProfileData } from 'features/editableProfileCard/model/services/updateProfileData/updateProfileData'
import { HStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface EditableProfileCardHeaderProps {
  className?: string
}

const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('profilePage')

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)

  const canEdit = authData?.id === profileData?.id
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    void dispatch(updateProfileData())
  }, [dispatch])

  return (
      <HStack max justify={'between'} className={classNames('', {}, [className])}>
          <Text title={t('Профиль')} />
          {canEdit && (
          <>
              {readonly
                ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                        data-testid={'EditableProfileCardHeader.EditButton'}
                      >
                        {t('Редактировать')}
                    </Button>
                  )
                : (
                    <HStack gap={'8'}>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                            data-testid={'EditableProfileCardHeader.CancelButton'}
                          >
                            {t('Отменить')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                            data-testid={'EditableProfileCardHeader.SaveButton'}
                          >
                            {t('Сохранить')}
                        </Button>
                    </HStack>
                  )}
          </>
          )}
      </HStack>
  )
})

EditableProfileCardHeader.displayName = 'EditableProfileCardHeader'

export { EditableProfileCardHeader }