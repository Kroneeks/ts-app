import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className = '' } = props;
    const { t } = useTranslation('profilePage');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Text
                theme={TextTheme.ERROR}
                text={t('Не удалось загрузить профиль')}
            />
        );
    }

    return (
        <Page
            data-testid="ProfilePage"
            className={classNames('', {}, [className])}
        >
            <VStack max gap={'16'}>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
