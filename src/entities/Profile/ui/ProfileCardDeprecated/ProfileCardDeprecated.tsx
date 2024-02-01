import { type Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { type ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profilePage');

    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, {}, [cls.error])}
        >
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('Ошибка')}
                text={t('Непредвиденная ошибка')}
            />
        </HStack>
    );
};

export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, { [cls.loading]: true })}
        >
            <Loader />
        </HStack>
    );
};

const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const { t } = useTranslation('profilePage');
    const {
        className = '',
        data,
        readonly = true,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            max
            gap="16"
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} alt={t('Аватар')} />
                </HStack>
            )}
            <Input
                value={data?.first}
                className={cls.input}
                placeholder={t('Ваше имя')}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                className={cls.input}
                placeholder={t('Ваша фамилия')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
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
        </VStack>
    );
});

ProfileCardDeprecated.displayName = 'ProfileCardDeprecated';

export { ProfileCardDeprecated };
