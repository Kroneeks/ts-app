import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import useDeviceDetection from '@/shared/lib/hooks/useDeviceDetection/useDeviceDetection';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('article');
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();
    const device = useDeviceDetection();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = () => {
        setIsOpen(false);
    };

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t(
                'Здесь вы можете искать и просматривать статьи на различные темы',
            )}
        />
    );

    if (device === 'Mobile') {
        return (
            <Drawer isOpen={isOpen} onClose={onClose} lazy>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});

ArticlePageGreeting.displayName = 'ArticlePageGreeting';
