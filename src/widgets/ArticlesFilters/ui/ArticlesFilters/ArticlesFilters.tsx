import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { type ArticleSortField, type ArticleType } from '@/entities/Article';
import { type SortOrder } from '@/shared/types/sort';
import { Input } from '@/shared/ui/redesigned/Input';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
    className?: string;
    type: ArticleType;
    search: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSearch: (value: string) => void;
    onChangeType: (type: ArticleType) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className = '',
        type,
        search,
        sort,
        order,
        onChangeSearch,
        onChangeType,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation('article');

    return (
        <Card
            className={classNames(cls.ArticlesFilters, {}, [className])}
            padding="24"
        >
            <VStack gap="32">
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                    addonLeft={
                        <Icon Svg={SearchIcon} width="24px" height="24px" />
                    }
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
});

ArticlesFilters.displayName = 'ArticlesFilters';

export { ArticlesFilters };
