import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from '@/entities/Article';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchNextArticlesPage } from '@/pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3);
        const dispatch = useAppDispatch();

        const onLoadNextPart = useCallback(() => {
            void dispatch(fetchNextArticlesPage());
        }, [dispatch]);

        if (isLoading ?? error ?? !articles) {
            return null;
        }

        return (
            <VStack
                gap="8"
                className={classNames('', {}, [className])}
                data-testid="ArticleRecommendationsList"
            >
                <Text size="l" title={t('Рекомендуем')} />
                <ArticleList
                    onLoadNextPart={onLoadNextPart}
                    articles={articles}
                    target={'_blank'}
                />
            </VStack>
        );
    },
);

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
