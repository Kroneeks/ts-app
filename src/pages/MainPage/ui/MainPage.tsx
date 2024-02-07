import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

const MainPage = (): React.ReactElement => {
    const { t } = useTranslation('main');

    return (
        <Page data-testid={'MainPage'}>
            <VStack gap="16">
                <Text title={t('Главная страница')} size="l" />
            </VStack>
        </Page>
    );
};

export default MainPage;
