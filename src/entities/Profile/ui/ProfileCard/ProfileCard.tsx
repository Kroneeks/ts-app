import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}

const ProfileCard = ({ className = '' }: ProfileCardProps) => {
  const { t } = useTranslation('profilePage')
  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
          <div className={cls.header}>
              <Text title={t('Профиль')} />
              <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>{t('Редактировать')}</Button>
          </div>
          <div className={cls.data}>
              <Input value={data?.first} className={cls.input} placeholder={t('Ваше имя')} />
              <Input value={data?.lastname} className={cls.input} placeholder={t('Ваша фамилия')} />

          </div>

      </div>
  )
}

export { ProfileCard }
