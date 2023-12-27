import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack'
import { EditableProfileCard } from 'features/editableProfileCard'
import { fetchProfileData } from 'features/editableProfileCard/model/services/fetchProfileData/fetchProfileData'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className = '' } = props
  const { t } = useTranslation('profilePage')
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <Text theme={TextTheme.ERROR} text={t('Не удалось загрузить профиль')} />
  }

  return (
      <Page>
          <VStack max gap={'16'}>
              <EditableProfileCard id={id} />
          </VStack>
      </Page>
  )
}

export default ProfilePage
