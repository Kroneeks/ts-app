import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = ({ className = '' }: ProfilePageProps) => {
  const { t } = useTranslation('profilePage')

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className="page-wrapper">
              {t('PROFILE PAGE')}
          </div>
      </DynamicModuleLoader>
  )
}

export default ProfilePage
