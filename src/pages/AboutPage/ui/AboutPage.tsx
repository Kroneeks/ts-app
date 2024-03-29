import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page/Page';

const AboutPage = (): React.ReactElement => {
    const { t } = useTranslation('about');

    return <Page data-testid="AboutPage">{t('О сайте')}</Page>;
};

export default AboutPage;
