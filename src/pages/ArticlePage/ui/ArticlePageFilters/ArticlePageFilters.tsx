import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlePageFilters.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleView } from '@/entities/Article';

import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlePageFiltersProps {
    className?: string;
}

const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const { className = '' } = props;
    const { t } = useTranslation('article');
    const {
        order,
        sort,
        search,
        type,
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        onChangeView,
    } = useArticleFilters();

    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    view={ArticleView.BLOCK}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});

ArticlePageFilters.displayName = 'ArticlePageFilters';
export { ArticlePageFilters };
