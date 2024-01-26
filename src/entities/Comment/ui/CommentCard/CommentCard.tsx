import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { type Comment } from '../../model/types/comment';
import { memo } from 'react';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentCard = memo((props: CommentCardProps) => {
    const { className = '', comment, isLoading = false } = props;

    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.CommentCard, {}, [className])}
                data-testid="CommentCard.Loading"
            >
                <div className={cls.header}>
                    <Skeleton width={40} height={40} borderR="50%" />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton className={cls.body} width={'100%'} height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.CommentCard, {}, [className])}
            data-testid="CommentCard.Content"
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                <Avatar
                    src={
                        comment.user.avatar ??
                        'https://cdn-icons-png.flaticon.com/512/456/456212.png'
                    }
                />
                <Text title={comment.user.username} />
            </AppLink>
            <Text className={cls.body} text={comment.text} />
        </VStack>
    );
});

CommentCard.displayName = 'CommentCard';

export { CommentCard };
