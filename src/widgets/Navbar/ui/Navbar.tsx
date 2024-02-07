import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Portal } from '@/shared/ui/redesigned/Portal';
import { Button } from '@/shared/ui/redesigned/Button';

interface NavbarProps {
    className?: string;
}

const Navbar = memo(({ className = '' }: NavbarProps): React.ReactElement => {
    const { t } = useTranslation('navbar');
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const mainClass = cls.NavbarRedesigned;

    if (authData) {
        return (
            <header className={classNames(mainClass, {}, [className])}>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(mainClass, {}, [className])}>
            <Button
                variant="clear"
                onClick={onShowModal}
                className={classNames(cls.links)}
            >
                {t('Войти')}
            </Button>
            <Portal>
                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
            </Portal>
        </header>
    );
});

Navbar.displayName = 'Navbar';

export { Navbar };
