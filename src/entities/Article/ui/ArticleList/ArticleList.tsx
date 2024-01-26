import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { type Article } from '../../model/types/article';
import { ArticleView } from '@/entities/Article/model/consts/consts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import {
    type HTMLAttributeAnchorTarget,
    memo,
    useState,
    useRef,
    useEffect,
    type FC,
} from 'react';
import {
    Virtuoso,
    VirtuosoGrid,
    type VirtuosoGridHandle,
} from 'react-virtuoso';
import { ARTICLE_LIST_ITEM_LOCASTORAGE_IDX } from '@/shared/const/localstorage';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart: () => void;
    virtualized?: boolean;
}

const ArticleList = (props: ArticleListProps) => {
    const {
        className = '',
        articles,
        isLoading,
        view = ArticleView.BLOCK,
        target = '_blank',
        onLoadNextPart,
        virtualized = false,
    } = props;
    const { t } = useTranslation('article');
    const [selectedArticleId, setSelectedArticleId] = useState(1);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    function getSkeletons(view?: ArticleView) {
        if (view !== undefined) {
            return new Array(view === ArticleView.BLOCK ? 9 : 3)
                .fill(0)
                .map((item, index) => (
                    <ArticleListItemSkeleton key={index} view={view} />
                ));
        } else {
            return new Array(3)
                .fill(0)
                .map((_, index) => (
                    <ArticleListItemSkeleton
                        key={index}
                        view={ArticleView.LIST}
                        className={cls.card}
                    />
                ));
        }
    }

    useEffect(() => {
        const paged =
            sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCASTORAGE_IDX) ?? 1;
        setSelectedArticleId(+paged);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (view === 'BLOCK') {
            timeoutId = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 100);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [selectedArticleId, view]);

    const renderVirtualArticle = (index: number, article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                className={cls.card}
                index={index}
                article={article}
                view={view}
                target={target}
            />
        );
    };

    const renderArticle = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            target={target}
        />
    );

    const Footer = memo(() => {
        if (isLoading) {
            return <div className={cls.skeleton}>{getSkeletons()}</div>;
        }
    });
    Footer.displayName = 'Footer';

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    const ItemContainerComp: FC<{
        height: number;
        width: number;
        index: number;
    }> = ({ height, width, index }) => (
        <div className={cls.ItemContainer}>
            <ArticleListItemSkeleton
                key={index}
                view={view}
                className={cls.card}
            />
        </div>
    );

    const VirtualList = (
        <Virtuoso
            data={articles}
            itemContent={renderVirtualArticle}
            endReached={onLoadNextPart}
            initialTopMostItemIndex={selectedArticleId}
            components={{
                Footer,
            }}
            style={{
                width: '100%',
            }}
        />
    );

    const VirtualGrid = (
        <VirtuosoGrid
            data={articles}
            itemContent={renderVirtualArticle}
            endReached={onLoadNextPart}
            totalCount={articles.length}
            components={{
                ScrollSeekPlaceholder: ItemContainerComp,
            }}
            listClassName={cls.itemsWrapper}
            scrollSeekConfiguration={{
                enter: (velocity) => Math.abs(velocity) > 700,
                exit: (velocity) => Math.abs(velocity) < 30,
            }}
            style={{
                width: '100%',
            }}
        />
    );

    if (virtualized) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                {view === 'LIST' ? VirtualList : VirtualGrid}
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            data-testid="ArticleList"
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}

            {isLoading && getSkeletons(view)}
        </div>
    );
};

export { ArticleList };
