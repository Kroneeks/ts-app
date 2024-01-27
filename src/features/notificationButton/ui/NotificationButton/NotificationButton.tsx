import { memo, useCallback, useState } from 'react';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Popover } from '@/shared/ui/redesigned/Popups';
import NotificationIcon from '@/shared/assets/icons/notifications.svg?react';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { NotificationList } from '@/entities/Notification';
import cls from './NotificationButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import useDeviceDetection from '@/shared/lib/hooks/useDeviceDetection/useDeviceDetection';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';

interface NotificationButtonProps {
    className?: string;
}

const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const device = useDeviceDetection();

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    Svg={NotificationIcon}
                    onClick={onOpenDrawer}
                    clickable
                    width="20px"
                    height="20px"
                />
            }
            off={
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated
                        Svg={NotificationIcon}
                        inverted
                        width="20px"
                        height="20px"
                    />
                </ButtonDeprecated>
            }
        />
    );

    if (device === 'Tablet' || device === 'Desktop') {
        return (
            <div>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                />
            </div>
        );
    }

    return (
        <div>
            {trigger}
            <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                <NotificationList />
            </Drawer>
        </div>
    );
});

NotificationButton.displayName = 'NotificationButton';

export { NotificationButton };
