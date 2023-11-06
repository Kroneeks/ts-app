import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = ({ className = '' }: ProfilePageProps) => {
  const { t } = useTranslation('profilePage')
  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className="page-wrapper">
              <ProfileCard />
              {t('PROFILE PAGE')}
          </div>
      </DynamicModuleLoader>
  )
}

export default ProfilePage
