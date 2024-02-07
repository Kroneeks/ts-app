import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '@/features/editableProfileCard/model/selectors/getProfileData/getProfileData';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileReadonly } from '@/features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '@/features/editableProfileCard/model/slice/profileSlice';
import { updateProfileData } from '@/features/editableProfileCard/model/services/updateProfileData/updateProfileData';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
    className?: string;
}

const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation('profilePage');

        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);

        const canEdit = authData?.id === profileData?.id;
        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            void dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <Card borderR="sm-round" padding="24" max>
                                    <HStack
                                        max
                                        justify={'between'}
                                        className={classNames('', {}, [className])}
                                    >
                                        <Text title={t('Профиль')} />
                                        {canEdit && (
                                            <>
                                                {readonly ? (
                                                    <Button
                                                        variant="outline"
                                                        onClick={onEdit}
                                                        data-testid={
                                                            'EditableProfileCardHeader.EditButton'
                                                        }
                                                    >
                                                        {t('Редактировать')}
                                                    </Button>
                                                ) : (
                                                    <HStack gap={'8'}>
                                                        <Button
                                                            variant="outline"
                                                            color="error"
                                                            onClick={onCancelEdit}
                                                            data-testid={
                                                                'EditableProfileCardHeader.CancelButton'
                                                            }
                                                        >
                                                            {t('Отменить')}
                                                        </Button>
                                                        <Button
                                                            variant="outline"
                                                            color="success"
                                                            onClick={onSave}
                                                            data-testid={
                                                                'EditableProfileCardHeader.SaveButton'
                                                            }
                                                        >
                                                            {t('Сохранить')}
                                                        </Button>
                                                    </HStack>
                                                )}
                                            </>
                                        )}
                                    </HStack>
                                </Card>
        );
    },
);

EditableProfileCardHeader.displayName = 'EditableProfileCardHeader';

export { EditableProfileCardHeader };
