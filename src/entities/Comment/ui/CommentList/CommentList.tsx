import { classNames } from '@/shared/lib/classNames/classNames';
import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { useTranslation } from 'react-i18next';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface CommentListProps {
    className?: string;
    comments: Comment[];
    isLoading?: boolean;
}

const CommentList = (props: CommentListProps) => {
    const { className = '', comments = [], isLoading = false } = props;
    const { t } = useTranslation('comments');

    if (isLoading) {
        return (
            <VStack max gap="16" className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        comment={comment}
                        key={comment.id}
                    />
                ))
            ) : (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text title={t('Комментарии отсутствуют')} />}
                    off={
                        <TextDeprecated title={t('Комментарии отсутствуют')} />
                    }
                />
            )}
        </VStack>
    );
};

export { CommentList };
