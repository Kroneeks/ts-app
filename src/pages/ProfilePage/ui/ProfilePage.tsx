import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { classNames } from '@/shared/lib/classNames/classNames'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className = '' } = props
  const { t } = useTranslation('profilePage')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <Text theme={TextTheme.ERROR} text={t('Не удалось загрузить профиль')} />
  }

  return (
      <Page className={classNames('', {}, [className])}>
          <VStack max gap={'16'}>
              <EditableProfileCard id={id} />
          </VStack>
      </Page>
  )
}

export default ProfilePage
