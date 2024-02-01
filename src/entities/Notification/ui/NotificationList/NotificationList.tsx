import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { memo } from 'react';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

interface NotificationListProps {
    className?: string;
}

const NotificationList = memo((props: NotificationListProps) => {
    const { className = '' } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" borderR="8px" height="80px" />
                <Skeleton width="100%" borderR="8px" height="80px" />
                <Skeleton width="100%" borderR="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});

NotificationList.displayName = 'NotificationList';

export { NotificationList };
