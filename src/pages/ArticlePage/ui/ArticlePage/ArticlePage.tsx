import cls from './ArticlePage.module.scss';
import { memo, useCallback } from 'react';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { useSearchParams } from 'react-router-dom';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { Page } from '@/widgets/Page';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { fetchNextArticlesPage } from '@/pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlePage = memo(({ className = '' }: ArticlePageProps) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        void dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        void dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={cls.ArticlePage}
                data-testid="ArticlePage"
            >
                <ArticlePageFilters />
                <ArticleInfiniteList
                    onLoadNextPart={onLoadNextPart}
                    className={cls.list}
                />
                <ArticlePageGreeting />
            </Page>
        </DynamicModuleLoader>
    );
});

ArticlePage.displayName = 'ArticlePage';

export default ArticlePage;
