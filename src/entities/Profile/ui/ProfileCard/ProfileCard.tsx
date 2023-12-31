import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { CountrySelect, type Country } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profilePage')
  const {
    className = '',
    data,
    isLoading = false,
    error = '',
    readonly = true,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  if (isLoading) {
    return (
        <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
            <Loader />
        </div>
    )
  }

  if (error) {
    return (
        <div className={classNames(cls.ProfileCard, { }, [className, cls.error])}>
            <Text theme={TextTheme.ERROR} align={TextAlign.CENTER} title={t('Ошибка')} text={t('Непредвиденная ошибка')} />
        </div>
    )
  }

  return (
      <div className={classNames(cls.ProfileCard, mods, [className])}>
          <div className={cls.data}>
              {data?.avatar && (
              <div className={cls.avatarWrapper}>
                  <Avatar src={data?.avatar} alt={t('Аватар')} size={AvatarSize.LARGE} />
              </div>
              )
                    }
              <Input
                  value={data?.first}
                  className={cls.input}
                  placeholder={t('Ваше имя')}
                  onChange={onChangeFirstname}
                  readonly={readonly}
              />
              <Input
                  value={data?.lastname}
                  className={cls.input}
                  placeholder={t('Ваша фамилия')}
                  onChange={onChangeLastname}
                  readonly={readonly}
              />
              <Input
                  value={data?.age}
                  className={cls.input}
                  placeholder={t('Ваш возраст')}
                  onChange={onChangeAge}
                  readonly={readonly}
              />
              <Input
                  value={data?.city}
                  className={cls.input}
                  placeholder={t('Город')}
                  onChange={onChangeCity}
                  readonly={readonly}
              />
              <Input
                  value={data?.username}
                  className={cls.input}
                  placeholder={t('Имя пользователя')}
                  onChange={onChangeUsername}
                  readonly={readonly}
              />
              <Input
                  value={data?.avatar}
                  className={cls.input}
                  placeholder={t('Введите ссылку на аватар')}
                  onChange={onChangeAvatar}
                  readonly={readonly}
              />
              <CurrencySelect
                  className={cls.input}
                  onChange={onChangeCurrency}
                  readonly={readonly}
                  value={data?.currency}
              />
              <CountrySelect
                  className={cls.input}
                  onChange={onChangeCountry}
                  readonly={readonly}
                  value={data?.country}
              />
          </div>

      </div>
  )
}

export { ProfileCard }
