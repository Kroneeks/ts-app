import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { memo } from 'react';
import { type Notification } from '../../model/types/notification';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppLink } from '@/shared/ui/deprecated/AppLink';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

const NotificationItem = memo((props: NotificationItemProps) => {
    const { className = '', item } = props;

    const content = (
        <Card className={classNames(cls.NotificationItem, {}, [className])}>
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <AppLink className={cls.link} target="_blank" to={item.href}>
                {content}
            </AppLink>
        );
    }

    return content;
});

NotificationItem.displayName = 'NotificationItem';

export { NotificationItem };
