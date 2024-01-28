import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters/ui';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();
    const {
        order,
        sort,
        search,
        type,
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            search={search}
            sort={sort}
            type={type}
            order={order}
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeType={onChangeType}
            className={className}
        />
    );
});

FiltersContainer.displayName = 'FiltersContainer';

export { FiltersContainer };
