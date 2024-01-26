import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';
import { ArticleList } from '@/entities/Article';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';

interface ArticleInfiniteListProps {
    className?: string;
    onLoadNextPart: () => void;
    virtualized?: boolean;
}

const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className = '', onLoadNextPart, virtualized = false } = props;
    const { t } = useTranslation('article');
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    // const inited = useSelector(getArticlesPageInited)

    if (error) {
        return (
            <Text
                theme={TextTheme.ERROR}
                text={t('Произошла ошибка во время загрузки данных')}
            />
        );
    }

    return (
        <ArticleList
            view={view}
            isLoading={isLoading}
            articles={articles}
            className={className}
            onLoadNextPart={onLoadNextPart}
            virtualized={virtualized}
        />
    );
});

ArticleInfiniteList.displayName = 'ArticleInfiniteList';

export { ArticleInfiniteList };
