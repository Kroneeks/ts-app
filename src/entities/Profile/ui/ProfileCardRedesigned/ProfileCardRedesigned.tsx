import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { memo } from 'react';
import { type ProfileCardProps } from '../ProfileCard/ProfileCard';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profilePage');

    return (
        <HStack justify="center" max>
            <Text
                variant="error"
                align="center"
                title={t('Ошибка')}
                text={t('Непредвиденная ошибка')}
            />
        </HStack>
    );
};

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card padding="24" max>
            <VStack gap="32">
                <HStack max justify="center">
                    <Skeleton width={128} height={128} borderR="100%" />
                </HStack>
                <HStack gap="32" max>
                    <VStack gap="16" max>
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                    <VStack gap="16" max>
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};

const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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

    return (
        <Card max padding="24" className={className}>
            <VStack gap="32">
                {data?.avatar && (
                    <HStack justify="center" max>
                        <Avatar size={128} src={data?.avatar} />
                    </HStack>
                )}
                <HStack gap="24" max>
                    <VStack gap="16" max>
                        <Input
                            value={data?.first}
                            label={t('Имя')}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            data-testid="ProfileCard.firstname"
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Фамилия')}
                            onChange={onChangeLastname}
                            readonly={readonly}
                            data-testid="ProfileCard.lastname"
                        />
                        <Input
                            value={data?.age}
                            label={t('Возраст')}
                            onChange={onChangeAge}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.city}
                            label={t('Город')}
                            onChange={onChangeCity}
                            readonly={readonly}
                        />
                    </VStack>
                    <VStack gap="16" max>
                        <Input
                            value={data?.username}
                            label={t('Имя пользователя')}
                            onChange={onChangeUsername}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Ссылка на аватар')}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                        />
                        <CurrencySelect
                            onChange={onChangeCurrency}
                            readonly={readonly}
                            value={data?.currency}
                        />
                        <CountrySelect
                            onChange={onChangeCountry}
                            readonly={readonly}
                            value={data?.country}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
});

ProfileCardRedesigned.displayName = 'ProfileCardRedesigned';

export { ProfileCardRedesigned };
