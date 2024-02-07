import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Select, type SelectOption } from '@/shared/ui/deprecated/Select';
import { type SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className = '', sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    return (
        <div
                            className={classNames(
                                cls.ArticleSortSelectorRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <VStack gap="8">
                                <Text text={t('Сортировать по:')} />
                                <ListBox
                                    items={sortFieldOptions}
                                    value={sort}
                                    onChange={onChangeSort}
                                />
                                <ListBox
                                    items={orderOptions}
                                    value={order}
                                    onChange={onChangeOrder}
                                />
                            </VStack>
                        </div>
    );
});

ArticleSortSelector.displayName = 'ArticleSortSelector';

export { ArticleSortSelector };
