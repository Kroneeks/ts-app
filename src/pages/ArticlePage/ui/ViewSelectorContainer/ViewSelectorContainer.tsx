import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
    className?: string;
}

const ViewSelectorContainer = memo((props: ViewSelectorContainerProps) => {
    const { className = '' } = props;
    const { view, onChangeView } = useArticleFilters();

    return (
        <ArticleViewSelector
            className={classNames('', {}, [className])}
            view={view}
            onViewClick={onChangeView}
        />
    );
});

ViewSelectorContainer.displayName = 'ViewSelectorContainer';

export { ViewSelectorContainer };
