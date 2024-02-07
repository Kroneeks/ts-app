import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { type Comment } from '../../model/types/comment';
import { memo } from 'react';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { getRouteProfile } from '@/shared/const/router';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentCard = memo((props: CommentCardProps) => {
    const { className = '', comment, isLoading = false } = props;

    const Skeleton = SkeletonRedesigned;

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
        <Card padding="24" borderR="sm-round" max>
                            <VStack
                                gap="8"
                                max
                                className={classNames(cls.CommentCardRedesigned, {}, [
                                    className,
                                ])}
                                data-testid="CommentCard.Content"
                            >
                                <AppLink to={getRouteProfile(comment.user.id)}>
                                    <HStack gap="8">
                                        {comment.user.avatar ? (
                                            <Avatar
                                                size={40}
                                                src={comment.user.avatar}
                                            />
                                        ) : null}
                                        <Text text={comment.user.username} bold />
                                    </HStack>
                                </AppLink>
                                <Text text={comment.text} />
                            </VStack>
                        </Card>
    );
});

CommentCard.displayName = 'CommentCard';

export { CommentCard };
